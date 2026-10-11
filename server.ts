import express, { NextFunction, Request, Response } from "express";  
import { env } from "./config/env";
import { notFound } from "./middlewares/notFound";
import { errHandler } from "./middlewares/errHandler";
import { title } from "node:process";
import { createBlog } from "./middlewares/createBlog";
import { updateBlog } from "./middlewares/updateBlog";
import { deleteBlog } from "./middlewares/deleteBlog";
import { getBlog } from "./middlewares/getBlog";
import { getAllBlog } from "./middlewares/getAllBlog";


const server = express();


const createServer = () => {
    server.use(express.json());

    server.post("/posts", createBlog);
    server.put("/posts/:id", updateBlog);
    server.delete("/posts/:id", deleteBlog);
    server.get("/posts/:id", getBlog);
    server.get("/posts", getAllBlog);

    server.use(notFound);
    server.use(errHandler);
}


createServer();
server.listen(env.port, () => {
    console.log("Server is running");
})