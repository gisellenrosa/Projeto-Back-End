import {generateId} from '../../services/idGenerate';
import connection from '../../data/BaseDatabase';
import {generateToken} from '../../services/generateToken';
import {hash} from '../../services/hashManager';
import {signUpRequestDTO, signUpResponseDTO, User} from '../../model/User';

export default async function signUpBusiness(userRequestData: signUpRequestDTO): Promise<signUpResponseDTO>{
  if (
    !userRequestData.name ||
    !userRequestData.email ||
    !userRequestData.nickname||
    !userRequestData.password
  ) {
    throw new Error(
      "Missing information, necessary complete name, password and email"
    );
  }

  if (typeof userRequestData.name !== "string") {
    throw new Error("The field name should be a string");
  }
  if (typeof userRequestData.email !== "string") {
    throw new Error("The field email should be a string");
  }
  if (typeof userRequestData.password !== "string") {
    throw new Error("The field password should be a string");
  }
  if (!userRequestData.email || userRequestData.email.indexOf("@") < 0) {
    throw new Error("Invalid email");
  }
  if (!userRequestData.password || userRequestData.password.length < 6) {
    throw new Error("Invalid format, necessary use at least 6 characters");
  }
  const cypherPassword = await hash(userRequestData.password);

  const user: User = {
    id: generateId(),
    name: userRequestData.name,
    email: userRequestData.email,
    nickname: userRequestData.nickname,
    password: cypherPassword,
  };
  const token = generateToken({ id: user.id });

  await connection("User_Projeto").insert(user);

  return {token};
}