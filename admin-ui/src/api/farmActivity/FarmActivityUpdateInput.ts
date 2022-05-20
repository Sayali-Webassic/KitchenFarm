import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";

export type FarmActivityUpdateInput = {
  activityDate?: Date | null;
  description?: string | null;
  farm?: FarmWhereUniqueInput | null;
  title?: string | null;
};
