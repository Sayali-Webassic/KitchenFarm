import { FarmWhereInput } from "./FarmWhereInput";
import { FarmOrderByInput } from "./FarmOrderByInput";

export type FarmFindManyArgs = {
  where?: FarmWhereInput;
  orderBy?: Array<FarmOrderByInput>;
  skip?: number;
  take?: number;
};
