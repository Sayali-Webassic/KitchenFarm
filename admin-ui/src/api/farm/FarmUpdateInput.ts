import { FarmActivityUpdateManyWithoutFarmsInput } from "./FarmActivityUpdateManyWithoutFarmsInput";

export type FarmUpdateInput = {
  farmActivities?: FarmActivityUpdateManyWithoutFarmsInput;
  farmType?: "Terrace" | "Farm" | "Garden" | null;
  heightArea?: number | null;
  lengthArea?: number | null;
  sunlightAvailability?: "Low" | "Medium" | "High" | null;
  widthArea?: number | null;
};
