import { FarmActivityWhereInput } from "./FarmActivityWhereInput";
import { FarmActivityOrderByInput } from "./FarmActivityOrderByInput";

export type FarmActivityFindManyArgs = {
  where?: FarmActivityWhereInput;
  orderBy?: Array<FarmActivityOrderByInput>;
  skip?: number;
  take?: number;
};
