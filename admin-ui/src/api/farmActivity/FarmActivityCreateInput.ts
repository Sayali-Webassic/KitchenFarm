import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";

export type FarmActivityCreateInput = {
  activityDate?: Date | null;
  description?: string | null;
  farm?: FarmWhereUniqueInput | null;
  title?: string | null;
};
