import {Request, Response} from "express";
import createPhotoBusiness from "../../business/photo/createPhotoBusiness";
import { getTokenData } from "../../services/generateToken";

export default async function createPhoto(req: Request, res:Response): Promise<void> {
	 try {
		const token = req.headers.authorization

    const tokenData = getTokenData(token!)
    // o ! e pq pode retornar undefined ou o token... a ideia é que pegue o que for enviado
  
		const {subtitle, date, file, tags, collection} = req.body
    
		const response = await createPhotoBusiness({
			subtitle, author: tokenData.id , date, file, tags, collection
		})
		res.status(201).send({
			message: "Photo created successfully",
			response});
	} catch(error) {
    res.status(400).send(error.message);
	}
}