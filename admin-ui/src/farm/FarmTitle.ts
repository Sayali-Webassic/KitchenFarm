import { Farm as TFarm } from "../api/farm/Farm";

export const FARM_TITLE_FIELD = "id";

export const FarmTitle = (record: TFarm): string => {
  return record.id || record.id;
};
