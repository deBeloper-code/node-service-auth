import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/models/user.model";
import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hash: string) => boolean;

export class AuthDataSourceImp implements AuthDataSource {
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}

  //Methods
  async register(registerDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerDto;

    try {
      // 1. Check if the email is used.
      const isUsed = await UserModel.findOne({ email });
      if (isUsed) throw CustomError.badRequest("This credentials are used");
      // 2. Hash Password
      const userCreated = await UserModel.create({
        name,
        email,
        password: this.hashPassword(password),
      });

      await userCreated.save();

      // 3. Handle response to UserEntity
      return UserMapper.userEntityFromObject(userCreated);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async login(loginDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginDto;
    console.log(email, password);
    try {
      // 1. Check if the email is exists and get user
      const getUser = await UserModel.findOne({ email });
      if (!getUser)
        throw CustomError.badRequest("This credentials are not valid");
      // 2. Compare passwords
      const isValidPassword = this.comparePassword(password, getUser.password);
      if (!isValidPassword)
        throw CustomError.badRequest("This credentials are not valid");
      // 3. Handle response to UserEntity
      return UserMapper.userEntityFromObject(getUser);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
