import express from "express";
import { Router } from "express";
import * as aicontroller from "../controller/ai.controller.js"

const router= express.Router();


router.post("/ai-getreview", aicontroller.getreview)


export default router;