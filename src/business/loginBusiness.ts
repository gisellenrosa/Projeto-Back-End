import connection from '../data/BaseDatabase';
import {compare} from '../services/hashManager';
import {loginRequestDTO, loginResponseDTO, User} from '../model/User';
import { generateToken } from '../services/generateToken';

export default async function loginBusiness(userRequestData: loginRequestDTO): Promise<loginResponseDTO>{

  const [user] = await connection<User>("User_Projeto").where({ email: userRequestData.email })
  if(!user){
    throw new Error("User invalid")
  }
  const passwordIsCorrect = await compare(userRequestData.password, user.password);
  if(!passwordIsCorrect) {
    throw new Error("Invalid Password")
  }
  
  const token = generateToken({id: user.id})

  return {token};
}