import { logger } from "../lib/logger";
import { NextFunction, Request, Response } from "express";

export function errHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.error({err}, "Unhandled Error");

    res.status(500).json({
        success: false,
        message: "Internal Error"
    });

    next();
}