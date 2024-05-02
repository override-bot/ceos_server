import { Request } from "express"

export interface User {
    firstname: string,
    lastname: string,
    ceoScore: number,
    phoneNumber: string,
    instagramLink: string,
    whatsappLink: string,
    twitterLink: string,
    bio: string,
    imageUrl: string
    username: string,
    subscribers: string[]
}
export interface UserRequest extends Request {
    user?: {
        firstname: string,
        lastname: string,
        ceoScore: number,
        phoneNumber: string,
        instagramLink: string,
        whatsappLink: string,
        twitterLink: string,
        bio: string,
        imageUrl: string
        username: string,
        subscribers: string[]
    }
}
export interface UserUpdate {
    firstname?: string,
    lastname?: string,
    ceoScore?: number,
    phoneNumber?: string,
    instagramLink?: string,
    whatsappLink?: string,
    twitterLink?: string,
    bio?: string,
    imageUrl?: string
    username?: string,
    subscribers?: string[]
}