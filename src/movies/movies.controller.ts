import { Controller, Get } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  public constructor(private readonly moviesService: MoviesService) {}

  @Get("/last")
  last() {
    return this.moviesService.getLast();
  }

  @Get("/popular")
  popular() {
    return this.moviesService.getPopular();
  }

  // @Post()
  // create(@Body() createMovieDto: CreateMovieDto) {
  //   return this.moviesService.create(createMovieDto);
  // }

  // @Get()
  // findAll() {
  //   return this.moviesService.findAll();
  // }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.moviesService.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateMovieDto: UpdateMovieDto) {
  //   return this.moviesService.update(+id, updateMovieDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.moviesService.remove(+id);
  // }
}
