import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

// TODO: Add dialogue JSON file import here

// TODO: Add routes here

app.get("/health", (_request, response) => {
    response.json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`Piet Mondrian API running at http://localhost:${port}`);
});