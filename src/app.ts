import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';

import { router } from "./routes";

const app = express();

app.use(cors({ origin: "https://gobads.netlify.app/", credentials: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET"
    )
    return res.status(200).json({})
  }
  next()
})

const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
    response.json("GoBads");
});

export { serverHttp }

