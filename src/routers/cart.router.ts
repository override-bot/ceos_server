import express from "express";
import authentication from "../middleware/auth.middleware";
import cartController from "../controllers/cart.controller";
import validator from "../validators/validator";
import { superCartRequestSchema } from "../validators/cart.validator";


const cartRouter = express.Router();
cartRouter.get("/", cartController.getCart);
cartRouter.put("/", validator(superCartRequestSchema), cartController.updateCart);

export default cartRouter;