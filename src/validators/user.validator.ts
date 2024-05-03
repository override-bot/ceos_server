import Joi from "joi";
import { User, UserUpdate } from "../interfaces/user.interface";
export const userSchema = Joi.object<User>({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    ceoScore: Joi.number().required(),
    phoneNumber: Joi.string().required(),
    instagramLink: Joi.string(),
    whatsappLink: Joi.string(),
    twitterLink: Joi.string(),
    bio: Joi.string(),
    imageUrl: Joi.string().required(),
    username: Joi.string().required(),
    subscribers: Joi.array().items(Joi.string())
}).options({ allowUnknown: false });
export const userUpdateSchema = Joi.object<UserUpdate>({
    ceoScore: Joi.number().optional(),
    phoneNumber: Joi.string().optional(),
    instagramLink: Joi.string().optional(),
    whatsappLink: Joi.string().optional(),
    twitterLink: Joi.string().optional(),
    bio: Joi.string().optional(),
    imageUrl: Joi.string().optional(),
    username: Joi.string().optional(),
    subscribers: Joi.array().items(Joi.string())
}).options({ allowUnknown: false })