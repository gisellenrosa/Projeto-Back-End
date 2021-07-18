import {Router} from "express";
import createPhoto from "../controller/photo/createPhoto";
import getPhotos from "../controller/photo/getPhotos";


export const photoRouter = Router();

photoRouter.post("/create", createPhoto)
photoRouter.get("/getall", getPhotos)