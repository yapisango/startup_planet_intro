import express from "express";
import { getAllData } from "../controllers/getAllData.js";
import { getDataByPathParams } from "../controllers/getDataByPathParams.js";
import { getSingleData } from "../controllers/getSingleData.js";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);
apiRouter.get("/:id", getSingleData);
apiRouter.get("/:field/:term", getDataByPathParams);
