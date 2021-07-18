import connection from '../../data/BaseDatabase';

export default async function getPhotoBusiness(): Promise<any>{
  
  const result = await connection("Photo_Projeto")
  .join("User_Projeto", "User_Projeto.id", "Photo_Projeto.author")
  .select("User_Projeto.nickname","User_Projeto.avatar", "Photo_Projeto.*")

  return result
}