export type Photo = {
  id: string,
	subtitle: string,
	author: string,
	date: Date,
	file: string,
	tags: string[],
	collection: string
}

export interface PhotoRequestDTO {
  subtitle: any,
	author: any,
	date: any,
	file: any,
	tags: any,
	collection: any
}