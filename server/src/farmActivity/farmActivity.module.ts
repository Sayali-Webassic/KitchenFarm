import { Module } from "@nestjs/common";
import { FarmActivityModuleBase } from "./base/farmActivity.module.base";
import { FarmActivityService } from "./farmActivity.service";
import { FarmActivityController } from "./farmActivity.controller";
import { FarmActivityResolver } from "./farmActivity.resolver";

@Module({
  imports: [FarmActivityModuleBase],
  controllers: [FarmActivityController],
  providers: [FarmActivityService, FarmActivityResolver],
  exports: [FarmActivityService],
})
export class FarmActivityModule {}
