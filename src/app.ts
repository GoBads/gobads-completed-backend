import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';

import { router } from "./routes";

const app = express();

app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});

//var corsOptions = {
//  origin: 'https://gobads.netlify.app/',
//  optionsSuccessStatus: 200,
//}

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "UPDATE"]
}))

//app.use(cors(
//  {
//    origin: ["https://gobads.netlify.app/"],
//    methods: ["GET", "POST", "UPDATE"],
//    credentials: true,
//  }
//))

const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
    response.json("GoBads");
});

export { serverHttp }
