import express from "express";
import * as rateCtrl from "../controllers/rate.controller.js";

const rateRouter = express.Router();

rateRouter.post("/rates", rateCtrl.addRate);
rateRouter.get("/rates/effective", rateCtrl.getMostRecentRate);
rateRouter.get("/rates", rateCtrl.getAllRates);
rateRouter.get("/rates/:id", rateCtrl.getRateById);
rateRouter.delete("/rates/:id", rateCtrl.deleteRate);

export default rateRouter;