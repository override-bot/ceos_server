import { NextFunction, Response } from "express";
import { ProductRequest } from "../interfaces/product.interface";

const authentication = async (
    req: ProductRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

};



export default authentication;