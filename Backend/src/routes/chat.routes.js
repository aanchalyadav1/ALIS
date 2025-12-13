import express from "express";
import { ALISCore } from "../agents/ALISCore.js";

const router = express.Router();
router.post("/", async (req, res) => {
  const result = await ALISCore(req.body.input, req.body.context || {});
  res.json(result);
});
export default router;
