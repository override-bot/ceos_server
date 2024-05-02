import Joi from "joi";
import { User, UserUpdate } from "../interfaces/user.interface";
export const userSchema = Joi.object<User>({
    firstname: Joi.string().required,
    lastname: Joi.string().required,
    ceoScore: Joi.number().required,
    phoneNumber: Joi.string().required,
    instagramLink: Joi.string(),
    whatsappLink: Joi.string(),
    twitterLink: Joi.string(),
    bio: Joi.string(),
    imageUrl: Joi.string().required,
    username: Joi.string().required,
    subscribers: Joi.array().items(Joi.string())
}).options({ allowUnknown: false });
export const userUpdateSchema = Joi.object<UserUpdate>({
    firstname: Joi.string(),
    lastname: Joi.string(),
    ceoScore: Joi.number(),
    phoneNumber: Joi.string(),
    instagramLink: Joi.string(),
    whatsappLink: Joi.string(),
    twitterLink: Joi.string(),
    bio: Joi.string(),
    imageUrl: Joi.string(),
    username: Joi.string(),
    subscribers: Joi.array().items(Joi.string())
}).options({ allowUnknown: false })