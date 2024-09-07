import { Injectable } from "@nestjs/common";
import type { AuthDto } from "./auth.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  public users = [
    {
      id: 1,
      username: "admin@gmail.com",
      password: "admin",
    },
    {
      id: 2,
      username: "jdoe@gmail.com",
      password: "admin",
    },
  ];

  public constructor(private readonly jwtService: JwtService) {}

  public getUsers(): Array<Object> {
    return this.users;
  }

  public loginUser({ username, password }: AuthDto): string | null {
    const findUser = this.users.find((user) => user.username === username);

    if (!findUser) {
      return null;
    }

    if (findUser.password !== password) {
      return null;
    }

    return this.jwtService.sign(findUser);
  }
}
