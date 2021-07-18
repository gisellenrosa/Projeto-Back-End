import {Request, Response} from "express";
import getPhotoBusiness from "../../business/photo/getPhotosBusiness";
import { getTokenData } from "../../services/generateToken";

export default async function getPhotos(req: Request, res:Response): Promise<void> {
	 try {
		const token = req.headers.authorization

    const tokenData = getTokenData(token!)
    /* a funcao getTokenData vai pegar o valor de token digitado no req.headers.authorization
    e vai conferir pra ver se bate.*/

		const response = await getPhotoBusiness()

		res.status(201).send(response);
    // botei o response sem chave pra retonar direto o array.
	} catch(error) {
    res.status(400).send(error.message);
	}
}