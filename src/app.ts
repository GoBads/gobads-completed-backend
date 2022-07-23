import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';

import { router } from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200
};

app.use((req: Request, res: Response, next) => {
  res.header("Access-Control-Allow-Origin", 'https://gobads.netlify.app/')
  this.app.use(cors());
  next();
})

const serverHttp = http.createServer(app);

app.use(express.json());

app.use(router);

app.get("/", (request, response) => {
    response.json("GoBads");
});

export { serverHttp }

