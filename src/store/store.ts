import { createWithEqualityFn } from "zustand/traditional";
import { Part } from "../components/Part";
import { WorkbenchStore } from "../types/store";
import { getInitialState } from "./initialState";

export type WorkbenchStoreInit = {
  parts: Part[];
  width?: number;
  height?: number;
};

export const createWorkbenchStore = ({ parts, width, height }: WorkbenchStoreInit) =>
  createWithEqualityFn<WorkbenchStore>(
    (set, get) => ({
      ...getInitialState({ parts, width, height }),
    }),
    Object.is,
  );
