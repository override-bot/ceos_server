import Joi from "joi";
export const cartItemSchema = Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number().required()
});
export const superCartSchema = Joi.object({
    carts: Joi.array().items(Joi.object({
        cartId: Joi.string().required(),
        items: Joi.array().items(cartItemSchema).min(1).required()
    })).min(1).required()
})