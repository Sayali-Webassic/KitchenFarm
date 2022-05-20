import { FarmActivity as TFarmActivity } from "../api/farmActivity/FarmActivity";

export const FARMACTIVITY_TITLE_FIELD = "title";

export const FarmActivityTitle = (record: TFarmActivity): string => {
  return record.title || record.id;
};
