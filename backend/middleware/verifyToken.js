import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config
export default function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization; // ✅ Get the header properly

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ msg: 'Token missing' });
  }

  const token = authHeader.split(' ')[1]; // ✅ Bearer <token>
  console.log('--- DEBUG ---');
console.log('JWT_KEY:', process.env.JWT_KEY);
console.log('Token :' , token ? token.slice(0, 30) + '...' : 'none');
console.log('----------');

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; 
    console.log('--- DEBUG ---');
console.log('JWT_KEY:1', process.env.JWT_KEY);
console.log('Token 1:' , token ? token.slice(0, 30) + '...' : 'none');
console.log('-------1---');

    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid token' });
  }
}
