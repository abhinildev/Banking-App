import User from "../model/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import redisClient from "../config/redis.js";


export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ msg: "User already exists. Please login." });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: '1h' });
    await redisClient.setEx(`user:${user.id}`,3600,JSON.stringify({
      id:user.id,
      name:user.name,
      email:user.email,
    }))
    res.status(201).json({
      msg: "Signup successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });

    console.log("✅ User signed up:", user.email);

  } catch (error) {
    console.error("❌ Error in signup controller:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let cachedUser=await redisClient.get(`user:${email}`)
    let user;
    if(cachedUser){
      console.log("Found user in Redis cache")
      user=JSON.parse(cachedUser);
    }else{
       user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });
       await redisClient.setEx(`user:${email}`,3600,JSON.stringify(user))
    }

   
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: '1h' });

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });

    console.log("✅ User logged in:", user.email);
  } catch (error) {
    console.error("❌ Error in login controller:", error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


export const logout = async(req, res) => {
  try {
    const token=req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(400).json({msg:"No token provided"})
    const decoded=jwt.decode(token)
  const ttl=decoded.exp-Math.floor(Date.now()/1000)
  await redisClient.setEx(`blacklist:${token}`,ttl,"true")
  res.status(200).json({msg:"User logged out successfully"})
    } catch (error) {
    res.status(500).json({ msg: "Error logging out" });
  }
  
};
