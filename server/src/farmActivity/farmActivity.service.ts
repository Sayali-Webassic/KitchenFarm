import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FarmActivityServiceBase } from "./base/farmActivity.service.base";

@Injectable()
export class FarmActivityService extends FarmActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
