import express from "express";

declare global {
  namespace Express {
    interface Request {
      player_id?: string
    }
  }
}