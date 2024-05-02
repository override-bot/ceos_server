import express from "express";
import authentication from "../middleware/auth.middleware";
import userController from "../controllers/user.controller";

const userRouter = express.Router();
userRouter.get("/current-user", authentication, userController.getUser);
userRouter.post("/create", authentication, userController.createUser)
userRouter.put("/update", authentication, userController.updateUser)
export default userRouter;