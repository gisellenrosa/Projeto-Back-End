import {generateId} from '../../services/idGenerate';
import connection from '../../data/BaseDatabase';
import {PhotoRequestDTO, Photo} from '../../model/Photo';

export default async function createPhotoBusiness(photoRequestData: PhotoRequestDTO): Promise<void>{
  if (
    !photoRequestData.file
  ) {
    throw new Error(
      "Missing information, necessary complete file url"
    );
  }
  const photo: Photo = {
    id: generateId(),
    date: new Date(),
    file: photoRequestData.file,
    description: photoRequestData.description,
    author: photoRequestData.author,
    collection: photoRequestData.collection
  };

  console.log(photo)
  await connection("Photo_Projeto").insert(photo);

}