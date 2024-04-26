import { Router } from "express";
import { AuthRoutes } from "./auth/AuthRoutes";
import { AccountRoutes } from "./account/accountRoutes";

export class AppRoutes {
  //Get
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/user", AccountRoutes.routes);
    // router.use("api/products/");
    // router.use("api/orders/");

    return router;
  }
}
