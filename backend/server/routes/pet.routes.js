import express from "express";
import * as petCtrl from "../controllers/pet.controller.js";

const petRouter = express.Router();

petRouter.post("/pets", petCtrl.createPet);
petRouter.get("/pets", petCtrl.getAllPets);
petRouter.get("/pets/:id", petCtrl.getPetById);
petRouter.get("/pets/mypets/:id", petCtrl.getUsersPets);
petRouter.put("/pets/:id", petCtrl.updatePet);
petRouter.delete("/pets/:id", petCtrl.deletePet);

export default petRouter;
