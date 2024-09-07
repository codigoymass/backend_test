import { Module } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { MoviesController } from "./movies.controller";
import { ProvidersModule } from "src/providers/providers.module";
import { HttpCustomService } from "src/providers/http/http.service";

@Module({
  imports: [ProvidersModule],
  controllers: [MoviesController],
  providers: [MoviesService, HttpCustomService],
})
export class MoviesModule {}
