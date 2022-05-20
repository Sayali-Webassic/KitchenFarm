import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FarmActivityWhereInput = {
  activityDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  farm?: FarmWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
