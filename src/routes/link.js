import { Router } from "express";
import { generatLink } from "../controllers/link.js";

 export const linkRouter = Router()

linkRouter.post( "/create", generatLink )

