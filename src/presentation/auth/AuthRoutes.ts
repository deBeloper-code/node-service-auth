import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImp, AuthRepositoryImp } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
  //Get static
  static get routes(): Router {
    //Dep
    const router = Router();
    const database = new AuthDataSourceImp();
    const authRepository = new AuthRepositoryImp(database);
    const controller = new AuthController(authRepository);

    //Routes
    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    router.get("/users", [AuthMiddleware.validateJWT], controller.getUsers);

    return router;
  }
}
