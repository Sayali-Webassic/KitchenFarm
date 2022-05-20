import { Module } from "@nestjs/common";
import { FarmModuleBase } from "./base/farm.module.base";
import { FarmService } from "./farm.service";
import { FarmController } from "./farm.controller";
import { FarmResolver } from "./farm.resolver";

@Module({
  imports: [FarmModuleBase],
  controllers: [FarmController],
  providers: [FarmService, FarmResolver],
  exports: [FarmService],
})
export class FarmModule {}
