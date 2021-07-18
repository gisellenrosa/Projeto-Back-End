import {Request, Response} from "express";
import signUpBusiness from "../../business/user/signUpBusiness";

export default async function signUp(req: Request, res:Response): Promise<void> {
	 try {
		const {name, email, nickname, password, avatar} = req.body
		const response = await signUpBusiness({
			name, email, nickname, password, avatar
		})
		res.status(201).send({
			message: "Usuário criado!",
			response});
	} catch(error) {
    res.status(400).send(error.message);
	}
}