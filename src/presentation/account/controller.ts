import { Response, Request } from "express";
import { AccountRepository } from "../../domain";
import { InfoAccountUserDto } from "../../domain/dtos/account/account-user.dto";

export class AccountController {
  constructor(private readonly accountRepo: AccountRepository) {}

  //Methods
  accountInfo = (req: Request, res: Response) => {
    const [error, infoAccountUserDto] = InfoAccountUserDto.create(req.body);
    if (error) return res.status(400).json({ error });
    console.log("Aqui", infoAccountUserDto);
    res.status(200).json({ message: "This is your info" });
  };
}
