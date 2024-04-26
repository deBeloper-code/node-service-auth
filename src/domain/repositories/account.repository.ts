import { InfoAccountUserDto } from "../dtos/account/account-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AccountRepository {
  abstract infoAccount(acountDto: InfoAccountUserDto): Promise<UserEntity>;
  //  abstract updateAccount(): Promise<UserEntity>;
  // abstract deleteAccount(): Promise<UserEntity>;
}
