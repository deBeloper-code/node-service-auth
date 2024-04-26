import { InfoAccountUserDto } from "../dtos/account/account-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AccountDataSource {
  abstract infoAccount(accountDto: InfoAccountUserDto): Promise<UserEntity>;
  //TODO: We need to change the return both below methods.
  //Maybe they will be a boolean.
  //  abstract updateAccount(): Promise<UserEntity>;
  //  abstract deleteAccount(): Promise<UserEntity>;
}
