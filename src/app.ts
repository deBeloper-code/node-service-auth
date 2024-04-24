import { envs } from "./config";
import { MongoDataBase } from "./data/mogodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  // Databases
  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
