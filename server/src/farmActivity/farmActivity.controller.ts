import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FarmActivityService } from "./farmActivity.service";
import { FarmActivityControllerBase } from "./base/farmActivity.controller.base";

@swagger.ApiTags("farmActivities")
@common.Controller("farmActivities")
export class FarmActivityController extends FarmActivityControllerBase {
  constructor(
    protected readonly service: FarmActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
