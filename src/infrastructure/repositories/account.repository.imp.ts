import { UserEntity } from "../../domain";
import { AccountDataSource } from "../../domain/datasources/account.datasource";
import { InfoAccountUserDto } from "../../domain/dtos/account/account-user.dto";
import { AccountRepository } from "../../domain/repositories/account.repository";

export class AccountRepositoryImp implements AccountRepository {
  constructor(private readonly accountDataSource: AccountDataSource) {}

  infoAccount(accountDto: InfoAccountUserDto): Promise<UserEntity> {
    return this.accountDataSource.infoAccount(accountDto);
  }
}
