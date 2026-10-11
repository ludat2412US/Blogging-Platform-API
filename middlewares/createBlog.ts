import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";
import { posts, blogPost } from "../lib/data";

const now = new Date();
export const createAt = now.toISOString();

export function createBlog(
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.info("Post request success");

    const body = req.body as blogPost;

    if (body === undefined) {
        res.status(400).json({
            success: false,
            message: "Invalid body"
        });
    } 

    body["id"] = posts.length + 1;
    body["createAt"] = createAt;
    body["updateAt"] = createAt;
    posts.push(body);    
    res.status(201).json(body);
} 