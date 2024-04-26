import { UserEntity } from "../../domain";
import { AccountDataSource } from "../../domain/datasources/account.datasource";
import { InfoAccountUserDto } from "../../domain/dtos/account/account-user.dto";
const user: UserEntity = {
  name: "",
  email: "",
  id: "",
  role: [""],
  password: "",
};
export class AccountDataSourceImp implements AccountDataSource {
  constructor() {}

  async infoAccount(accountDto: InfoAccountUserDto): Promise<UserEntity> {
    console.log(accountDto);
    return user;
  }
}
