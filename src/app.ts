import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';
import { resolve } from 'path';

import { router } from "./routes";

const app = express();

app.use(cors());

app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});

// Middlewares
app.use(express.json());
app.use(express.static(resolve(__dirname, '..', 'uploads')));

// Route
app.use(router);

app.get("/", (req, res) => {
  return res.json({name: "GoBads"});
});

export { app }
