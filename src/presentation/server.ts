import express, { Router } from "express";
interface Options {
  port: number;
  routes: Router;
}

export class Server {
  //Properties
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(opt: Options) {
    this.port = opt.port;
    this.routes = opt.routes;
  }

  //Running server!!
  async start() {
    // Running middlewares
    this.app.use(express.json());
    //Running routers
    this.app.use(this.routes);
    // Listening
    this.app.listen(this.port, () => {
      console.log(`App is ready and listening on port ${this.port} 🚀`);
    });
  }
}
