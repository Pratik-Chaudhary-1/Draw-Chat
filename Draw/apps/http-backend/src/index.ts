import express from "express";
import { middleware } from "./middleware";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
  res.json({
    message: " user signed up.",
  });
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  res.json({
    token,
    message: " user signed up.",
  });
});

app.post("/room", middleware, (req, res) => {});

app.listen(3001);
