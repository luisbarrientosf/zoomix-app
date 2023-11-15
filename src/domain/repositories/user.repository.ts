import { User } from "domain/entities/user.entity";

export interface UserRepository {
  login(): Promise<User>;
}