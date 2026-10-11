import { Request, Response, NextFunction } from "express";
import { logger } from "../lib/logger";
import { blogPost, posts } from "../lib/data";

const now = new Date();
export const updateAt = now.toISOString();

export function updateBlog(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userID = Number(req.params.id);
    const body = req.body as blogPost;

    if (req.body === undefined) {
        logger.error("Invalid body");
        res.status(400).json({
            success: false,
            message: "Please enter a new post to update"
        });
    }

    const oldBody = posts[userID] as blogPost;
    body["id"] = userID;
    body["createAt"] = oldBody.createAt;
    body["updateAt"] = updateAt;
    res.status(200).json(body);
}