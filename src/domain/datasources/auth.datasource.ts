import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/user.entity";

// The 'abstract' keyword before the class declaration indicates that this class
// cannot be instantiated directly,
// but must be used as a base for other classes.
export abstract class AuthDataSource {
  // By declaring abstract methods within the abstract class,
  // you are specifying that child classes must provide
  // concrete implementations for these methods.
  abstract login(loginDto: LoginUserDto): Promise<UserEntity>;
  abstract register(registerDto: RegisterUserDto): Promise<UserEntity>;
}

// Any class that inherits from AuthDataSource must provide implementations
// for these abstract methods; otherwise, TypeScript will emit an error
// at compile time.
