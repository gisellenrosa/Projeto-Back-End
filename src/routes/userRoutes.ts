import {Router} from "express";
import signUp from "../controller/signUp";
import login from "../controller/login";

export const userRouter = Router();

userRouter.post("/signup", signUp)
userRouter.post("/login", login)