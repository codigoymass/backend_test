import { Injectable } from "@nestjs/common";
import { HttpCustomService } from "src/providers/http/http.service";

@Injectable()
export class MoviesService {
  public constructor(private readonly httpService: HttpCustomService) {}

  getLast() {
    return this.httpService.getLast();
  }

  getPopular() {
    return this.httpService.getPopular();
  }

  // create(createMovieDto: CreateMovieDto) {
  //   return 'This action adds a new movie';
  // }
  // findAll() {
  //   return `This action returns all movies`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} movie`;
  // }
  // update(id: number, updateMovieDto: UpdateMovieDto) {
  //   return `This action updates a #${id} movie`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} movie`;
  // }
}
