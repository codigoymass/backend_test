import { Body, Controller, Get, HttpException, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./auth.dto";

@Controller("auth")
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Get()
  public index(): Array<Object> {
    return this.authService.getUsers();
  }

  @Post()
  public login(@Body() payload: AuthDto): string {
    const user = this.authService.loginUser(payload);

    if (!user) {
      throw new HttpException("Invalid credentials", 401);
    }

    return user;
  }
}
