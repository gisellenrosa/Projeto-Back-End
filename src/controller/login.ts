import {Request, Response} from "express";
import loginBusiness from "../business/loginBusiness";

export default async function signUp(req: Request, res:Response): Promise<void> {
	 try {
    const {email, password} = req.body

		const response = await loginBusiness({
		 email, password 
		})
		res.status(201).send({
			response
		});
	} catch(error) {
    res.status(400).send(error.message);
	}
}