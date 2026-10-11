import dotenv from "dotenv"

dotenv.config();

export const env = {
    port: process.env.PORT ?? 4000,
    isProduction: (process.env.NODE_ENV ?? "development") === "production",
    nodeENV: process.env.NODE_ENV ?? "development",
    logLevel: process.env.logLevel ?? "info"
} as const