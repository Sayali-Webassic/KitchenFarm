import { Farm } from "../farm/Farm";

export type FarmActivity = {
  activityDate: Date | null;
  createdAt: Date;
  description: string | null;
  farm?: Farm | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
