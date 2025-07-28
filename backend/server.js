import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/neon.js";
import cors from "cors";
import authRoute from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.route.js";
import budgetRoute from "./routes/budgets.rote.js";
import redisClient from "./config/redis.js";

dotenv.config();
const app = express();

await redisClient.connect();

const allowedOrigins = [
  "https://banking-osxao0kjl-abhinildevs-projects.vercel.app",
  "https://banking-m7ennoytl-abhinildevs-projects.vercel.app",
  "https://banking-app-fz8i.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for this origin: " + origin));
    }
  },
  credentials: true,
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.json());


app.use("/auth", authRoute);
app.use("/transaction", transactionRoutes);
app.use("/budget", budgetRoute);


app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.status(404).json({ error: "Not found" });
});


sequelize.sync({ alter: true }).then(() => console.log("Neon is connected"));


const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Server running on port: " + port);
});
