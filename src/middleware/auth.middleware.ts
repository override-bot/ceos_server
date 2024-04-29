
import { NextFunction, Response } from "express";
import { getAuth } from "firebase-admin/auth";
import { CustomRequest } from "../interfaces/custom_data";

const authentication = async <T>(
    req: CustomRequest<T>,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization token not found"
        });
    }
    let token: string;
    if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    } else {
        token = authHeader;
    }
    try {
        const decodedToken = await getAuth().verifyIdToken(token);
        req.customData = decodedToken as T;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Not authorized"
        });
    }
};
export default authentication;



