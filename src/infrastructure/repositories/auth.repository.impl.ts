import {
  AuthDataSource,
  AuthRepository,
  RegisterUserDto,
  UserEntity,
} from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";

export class AuthRepositoryImp implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}

  async login(loginDto: LoginUserDto): Promise<UserEntity> {
    return this.authDataSource.login(loginDto);
  }

  async register(registerDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDataSource.register(registerDto);
  }
}
