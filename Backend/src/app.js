import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";
import sanctionRoutes from "./routes/sanction.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/sanction", sanctionRoutes);

app.get("/", (_, res) => res.json({ status: "ALIS backend healthy ✅" }));

app.use(errorHandler);
export default app;
