import express from "express";
import { generatePDF } from "../services/pdf.service.js";

const router = express.Router();
router.post("/", (req, res) => generatePDF(req.body, res));
export default router;
