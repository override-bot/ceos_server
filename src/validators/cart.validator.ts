const Joi = require('joi');

export const cartItemSchema = Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number().required()
});

export const cartRequestSchema = Joi.object({
    cartId: Joi.string().required(),
    items: Joi.array().items(cartItemSchema).required()
});

export const superCartRequestSchema = Joi.object({
    carts: Joi.array().items(cartRequestSchema).required()
});


