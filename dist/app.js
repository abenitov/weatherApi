"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const APIRoutes_1 = require("./routes/APIRoutes");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    api() {
    }
    config() {
    }
    routes() {
        let router = express.Router();
        router.get("/", (req, res, next) => {
            res.json({
                message: "Hello World!"
            });
        });
        this.app.use("/", router);
        this.app.use("/", new APIRoutes_1.default().router);
    }
}
exports.Server = Server;
