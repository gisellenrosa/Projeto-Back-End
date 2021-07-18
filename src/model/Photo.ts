export type Photo = {
  id: string,
	author: string,
	date: Date,
	file: string,
	description?: string,
	collection?: string
}

export interface PhotoRequestDTO {
	file: any,
	description?: any,
	author?: any,
	collection?:any
}

