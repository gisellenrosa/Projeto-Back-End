import {Router} from "express";
import signUp from "../controller/user/signUp";
import login from "../controller/user/login";

export const userRouter = Router();

userRouter.post("/signup", signUp)
userRouter.post("/login", login)