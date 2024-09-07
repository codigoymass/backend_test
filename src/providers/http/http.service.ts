import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class HttpCustomService {
  public readonly urlApi: string;
  public readonly tokenApi: string;

  public constructor(private readonly httpService: HttpService) {
    this.urlApi = process.env.URL_API ?? "";
    this.tokenApi = process.env.TOKEN_API ?? "";
  }

  public async getLast() {
    const number: number = Math.floor(Math.random() * 100) + 1;

    const { data } = await firstValueFrom(
      this.httpService.get(`${this.urlApi}/movie/latest?api_key=${this.tokenApi}`),
    );
    return data;
  }

  public async getPopular() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.urlApi}/movie/popular?api_key=${this.tokenApi}`),
    );
    return data;
  }
}
