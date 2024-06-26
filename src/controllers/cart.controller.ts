import { Request, Response } from "express";
import { SuperCartRequest } from "../interfaces/cart.interface";
import cartService from "../services/cart.service";
import { cartItemSchema } from "../validators/cart.validator";


class CartController {

    async updateCart(req: Request, res: Response) {

        try {
            const uid: string = (req as any).userId;
            const data: SuperCartRequest = req.body;
            console.log(data);
            await cartService.updateCart(data, uid);
            res.status(201).json({
                success: true,
                message: "Cart updated successfully",
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: "internal server error"
            });
        }
    }
    async getCart(req: Request, res: Response) {
        try {
            const uid: string = (req as any).userId;
            const cart = await cartService.getCart(uid)

            return res.status(200).json({
                success: true,
                message: "cart retrieved successfully",
                data: cart
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: "internal server error"
            })
        }
    }
}
export default new CartController()