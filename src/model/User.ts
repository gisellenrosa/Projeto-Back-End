export type User = {
  id: string, 
  name: string,  
  email: string, 
  nickname: string, 
  password: string
}

export interface signUpRequestDTO {
  name: any,
  email: any, 
  nickname: any,
  password:any
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