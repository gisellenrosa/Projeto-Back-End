export type User = {
  id: string, 
  name: string,  
  email: string, 
  nickname: string, 
  password: string,
  avatar?:string
}

export interface signUpRequestDTO {
  name: any,
  email: any, 
  nickname: any,
  password:any,
  avatar?:string
}

export interface signUpResponseDTO {
  token: string
}

export interface loginResponseDTO {
  token: string
}
export interface loginRequestDTO {
  email: any, 
  password:any
}