import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FarmService } from "./farm.service";
import { FarmControllerBase } from "./base/farm.controller.base";

@swagger.ApiTags("farms")
@common.Controller("farms")
export class FarmController extends FarmControllerBase {
  constructor(
    protected readonly service: FarmService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
