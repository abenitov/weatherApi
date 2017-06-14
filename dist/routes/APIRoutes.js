"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class APIRoutes {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.json({
            message: "getAll"
        });
    }
    get(req, res, next) {
        res.json({
            message: "get"
        });
    }
    init() {
        this.router.get("/getAll", this.getAll);
        this.router.get("/get", this.get);
    }
}
exports.default = APIRoutes;
