import { logger } from "../lib/logger";
import { Request, Response, NextFunction } from "express";
import { posts } from "../lib/data";

export function getBlog(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userID = Number(req.params.id);
    if (userID > posts.length + 1) {
        logger.error("Invalid id");
        res.status(400).json({
            success: false
        });
    }

    const body = posts[userID - 1];
    res.status(201).json(body);
}