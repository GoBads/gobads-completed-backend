import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';

import { router } from "./routes";

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});

//app.use(cors(
//  {
//    origin: ["https://gobads.netlify.app/"],
//    methods: ["GET", "POST", "UPDATE"],
//    credentials: true,
//  }
//))

//const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
    return res.json({name: "GoBads"});
});

export { app }
