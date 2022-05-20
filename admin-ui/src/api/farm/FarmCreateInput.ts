import { FarmActivityCreateNestedManyWithoutFarmsInput } from "./FarmActivityCreateNestedManyWithoutFarmsInput";

export type FarmCreateInput = {
  farmActivities?: FarmActivityCreateNestedManyWithoutFarmsInput;
  farmType?: "Terrace" | "Farm" | "Garden" | null;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
