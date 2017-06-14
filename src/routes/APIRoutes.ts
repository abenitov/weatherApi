/**
 * Created by adrian on 13/6/17.
 */
import {Router, Request, Response, NextFunction} from "express";

export default class APIRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }


    public getAll(req: Request, res: Response, next: NextFunction) {
        res.json({
            message: "getAll"
        });
    }

    public get(req: Request, res: Response, next: NextFunction) {
        res.json({
            message: "get"
        });    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get("/getAll", this.getAll);
        this.router.get("/get", this.get);

    }

}

