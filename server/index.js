import "dotenv/config";
import express from "express";
import cors from "cors";
import { respond } from "./matcher.js";

const app = express();
const port = process.env.PORT || 4000;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

const sessions = new Map();
function getSession(id) {
  if (!sessions.has(id)) sessions.set(id, { lastReply: {} });
  return sessions.get(id);
}

// TODO: Add routes here

app.get("/health", (_request, response) => {
    response.json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`Piet Mondrian API running at http://localhost:${port}`);
});