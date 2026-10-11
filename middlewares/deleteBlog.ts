import { logger } from "../lib/logger";
import { Request, Response, NextFunction } from "express";
import { posts } from "../lib/data";

export function deleteBlog(
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

    logger.info("Delete post successfully");
    posts.splice(userID - 1, 1);
    res.status(204).json({
        success: true
    })
}