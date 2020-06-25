export type PostDataType = {
    id:number
    message:string
    likeCount: number
}

export type ContactsType = {
    github:string
    vk:string
    facebook:string
    instagram:string
    twitter:string
    website:string
    youtube:string
    mainLink:string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type PrfileType = {
    userId:number
    lookingForAJob:boolean
    lookingForAJobDescription: number
    fullName:string
    contacts: ContactsType
    photos: PhotosType
}

export type UsersType = {
    id:number
    name:string
    status:string
    photos:PhotosType
    followed:boolean
}