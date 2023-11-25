import { WorkbenchStore } from "../types/store";
import { WorkbenchStoreInit } from "./store";

export const getInitialState = ({ parts, width, height }: WorkbenchStoreInit): WorkbenchStore => {
  return {
    workbenchId: "workbench-1",
    parts,
    width: width || 0,
    height: height || 0,
  };
};
