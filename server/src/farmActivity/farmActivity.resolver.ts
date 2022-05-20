import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FarmActivityResolverBase } from "./base/farmActivity.resolver.base";
import { FarmActivity } from "./base/FarmActivity";
import { FarmActivityService } from "./farmActivity.service";

@graphql.Resolver(() => FarmActivity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FarmActivityResolver extends FarmActivityResolverBase {
  constructor(
    protected readonly service: FarmActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
