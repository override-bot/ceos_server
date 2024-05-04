import express from "express";
import authentication from "../middleware/auth.middleware";
import cartController from "../controllers/cart.controller";


const cartRouter = express.Router();
cartRouter.get("/", authentication, cartController.getCart);
cartRouter.put("/", authentication, cartController.updateCart);

export default cartRouter;