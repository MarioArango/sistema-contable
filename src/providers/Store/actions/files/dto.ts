//GET URL PUBLIC PHOTO PROFILE USER
export interface IPhotoProfileUserDTO {
    containerName: string
    prefix: string
    generateDynamicName: boolean
    file: {
      fileName: string
      fileType: string
      b64: string
    }
} 

//DELETE URL PUBLIC PHOTO PROFILE USER
export interface IDeletePhotoProfileUserDTO {
    containerName: string
    prefix: string
    fileName: string
} 