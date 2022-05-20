import { SortOrder } from "../../util/SortOrder";

export type FarmOrderByInput = {
  createdAt?: SortOrder;
  farmType?: SortOrder;
  heightArea?: SortOrder;
  id?: SortOrder;
  lengthArea?: SortOrder;
  sunlightAvailability?: SortOrder;
  updatedAt?: SortOrder;
  widthArea?: SortOrder;
};
