import { Request, Response } from "express";
// Layer DOMAIN
import {
  AuthRepository,
  CustomError,
  LoginUser,
  RegisterUser,
  RegisterUserDto,
} from "../../domain";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data/models/user.model";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  private handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); //Winston
    return res.status(500).json({ error: "Internal Server Error" });
  }
  //Methods
  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    // Use cases register user (Business Logic) this is from (DOMAIN)
    new RegisterUser(this.authRepository, JwtAdapter.generateToken)
      .execute(registerUserDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  loginUser = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) return res.status(400).json({ error });
    // Use cases login user (Business Logic) this is from (DOMAIN)
    new LoginUser(this.authRepository, JwtAdapter.generateToken)
      .execute(loginUserDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };
  getUsers = (req: Request, res: Response) => {
    UserModel.find()
      .then((users) =>
        res.json({
          // users,
          user: req.body.user,
        })
      )
      .catch(() => res.status(500).json("Internal server error"));
  };
}
