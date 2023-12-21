import { User } from "domain/entities/user.entity";
import { UserRepository } from "domain/repositories/user.repository";

export class UserApi implements UserRepository {
  async login(): Promise<User> {
    return {
      id: "idTest",
      email: "test@email.com"
    };
  }
}