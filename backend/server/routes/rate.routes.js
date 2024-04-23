import express from "express";
import * as rateCtrl from "../controllers/rate.controller.js";

const rateRouter = express.Router();

rateRouter.post("/rates/new", rateCtrl.addRate);
rateRouter.get("/rates/get", rateCtrl.getAllRates);
rateRouter.get("/rates/get/:id", rateCtrl.getRateById);
rateRouter.delete("/rates/delete/:id", rateCtrl.deleteRate);

export default rateRouter;