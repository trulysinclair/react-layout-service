import { Part } from "../components/Part";

export type WorkbenchStore = {
  workbenchId: string;
  width: number;
  height: number;
  parts: Part[];
};

export type WorkbenchActions = object;

export type WorkbenchState = WorkbenchStore & WorkbenchActions;
