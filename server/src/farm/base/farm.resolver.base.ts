/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateFarmArgs } from "./CreateFarmArgs";
import { UpdateFarmArgs } from "./UpdateFarmArgs";
import { DeleteFarmArgs } from "./DeleteFarmArgs";
import { FarmFindManyArgs } from "./FarmFindManyArgs";
import { FarmFindUniqueArgs } from "./FarmFindUniqueArgs";
import { Farm } from "./Farm";
import { FarmActivityFindManyArgs } from "../../farmActivity/base/FarmActivityFindManyArgs";
import { FarmActivity } from "../../farmActivity/base/FarmActivity";
import { FarmService } from "../farm.service";

@graphql.Resolver(() => Farm)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FarmResolverBase {
  constructor(
    protected readonly service: FarmService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async _farmsMeta(
    @graphql.Args() args: FarmFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Farm])
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async farms(@graphql.Args() args: FarmFindManyArgs): Promise<Farm[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Farm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "own",
  })
  async farm(@graphql.Args() args: FarmFindUniqueArgs): Promise<Farm | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Farm)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "create",
    possession: "any",
  })
  async createFarm(@graphql.Args() args: CreateFarmArgs): Promise<Farm> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Farm)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "update",
    possession: "any",
  })
  async updateFarm(@graphql.Args() args: UpdateFarmArgs): Promise<Farm | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Farm)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "delete",
    possession: "any",
  })
  async deleteFarm(@graphql.Args() args: DeleteFarmArgs): Promise<Farm | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [FarmActivity])
  @nestAccessControl.UseRoles({
    resource: "FarmActivity",
    action: "read",
    possession: "any",
  })
  async farmActivities(
    @graphql.Parent() parent: Farm,
    @graphql.Args() args: FarmActivityFindManyArgs
  ): Promise<FarmActivity[]> {
    const results = await this.service.findFarmActivities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}