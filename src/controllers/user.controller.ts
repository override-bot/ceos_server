import { Request, Response } from "express";
import userService from "../services/user.service";
import { UserRequest, UserUpdate } from "../interfaces/user.interface";

class UserController {
    async createUser(req: UserRequest, res: Response) {
        const data: { [key: string]: any } = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            ceoScore: req.body.ceoScore ?? 0,
            phoneNumber: req.body.phoneNumber,
            instagramLink: req.body.instagramLink ?? "",
            whatsappLink: req.body.whatsappLink ?? "",
            twitterLink: req.body.twitterLink ?? "",
            bio: req.body.bio ?? "Nothing to see here",
            imageUrl: req.body.imageUrl,
            username: req.body.username ?? req.body.firstname,
            subscribers: req.body.subscribers ?? []
        }
        try {
            const uid: string = (req as any).userId;
            const requiredFields = ["firstname", 'lastname', 'phoneNumber', 'imageurl',];
            const missingFields: string[] = [];

            requiredFields.forEach(field => {
                if (!(field in data) || data[field] === null || typeof data[field] == "undefined") {
                    missingFields.push(field);
                }
            });
            if (missingFields.length > 0) {
                res.status(422).json({
                    success: false,
                    message: `Required fields are missing or null: ${missingFields.join(', ')}`
                });

            } else {
                const add = await userService.creatUser(data, uid);
                res.status(201).json({
                    success: true,
                    message: "user created successfully",
                    data: { "id": uid, ...data }
                })

            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: `internal server error`
            });

        }
    }
    async getUser(req: Request, res: Response) {
        try {
            const uid: string = (req as any).userId;
            const user = await userService.getUserById(uid);
            if (user.exists) {
                res.status(200).json({
                    success: true,
                    message: "user retrieved successfully",
                    data: user.data()
                })
            } else {
                res.status(404).json({
                    success: true,
                    message: "user not found"
                })
            }
        } catch (error) {
            res.status(500).json({
                success: true,
                message: "internal server error"
            })
        }
    }
    async updateUser(req: Request, res: Response) {
        const uid: string = (req as any).userId;

        try {
            const data: UserUpdate = req.body;

            // Define allowed keys
            const allowedKeys: (keyof UserUpdate)[] = [
                "firstname",
                "lastname",
                "ceoScore",
                "phoneNumber",
                "instagramLink",
                "whatsappLink",
                "twitterLink",
                "bio",
                "imageUrl",
                "username",
                "subscribers"
            ];

            // Check if any keys are not allowed
            const invalidKeys = Object.keys(data).filter(key => !allowedKeys.includes(key as keyof UserUpdate));

            if (invalidKeys.length > 0) {
                res.status(400).json({
                    success: false,
                    message: `Invalid keys found in the request body: ${invalidKeys.join(', ')}`
                });
                return;
            }

            const update = await userService.updateUser(data, uid);

            res.status(201).json({
                success: true,
                message: "User updated successfully",
                data: { id: uid, ...data }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }
}
export default new UserController();