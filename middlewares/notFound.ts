import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";


export function notFound(
    req: Request,
    res: Response,
    next: NextFunction 
) {
    logger.error("Not found path");

    res.status(404).json({
        success: false,
        message: "Server not found"
    });
}