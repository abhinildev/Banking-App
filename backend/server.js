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

// ---- ✅ CORS FIRST ----
const allowedOrigins = [
  "https://banking-osxao0kjl-abhinildevs-projects.vercel.app",
  "https://banking-m7ennoytl-abhinildevs-projects.vercel.app",
  "https://banking-app-fz8i.vercel.app"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
  }
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ---- ✅ Redis AFTER CORS ----
await redisClient.connect();
app.use(express.json());

// ---- ✅ ROUTES ----
app.use("/auth", authRoute);
app.use("/transaction", transactionRoutes);
app.use("/budget", budgetRoute);

// ---- ✅ CATCH-ALL 404 WITH CORS ----
app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.status(404).json({ error: "Not found" });
});

// ---- ✅ START ----
sequelize.sync({ alter: true }).then(() => console.log("Neon is connected"));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
