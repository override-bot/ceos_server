import express from "express";
import authentication from "../middleware/auth.middleware";
import userController from "../controllers/user.controller";
import validator from "../validators/validator";
import { userSchema, userUpdateSchema } from "../validators/user.validator";

const userRouter = express.Router();
userRouter.get("/", authentication, userController.getUser);
userRouter.post("/create", authentication, validator(userSchema), userController.createUser)
userRouter.patch("/update", authentication, validator(userUpdateSchema), userController.updateUser)
export default userRouter;