import express from "express";
import authentication from "../middleware/auth.middleware";

const userRouter = express.Router();
userRouter.get("/current-user", authentication);
userRouter.post("/", authentication)
export default userRouter;