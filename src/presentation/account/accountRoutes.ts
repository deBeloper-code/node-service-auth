import { Router } from "express";
import {
  AccountDataSourceImp,
  AccountRepositoryImp,
} from "../../infrastructure";
import { AccountController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AccountRoutes {
  static get routes(): Router {
    const router = Router();
    const db = new AccountDataSourceImp();
    const accountRepository = new AccountRepositoryImp(db);
    const controller = new AccountController(accountRepository);

    //Routes
    router.get("/info", [AuthMiddleware.validateJWT], controller.accountInfo);

    return router;
  }
}
