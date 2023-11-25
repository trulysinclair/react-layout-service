import React from "react";
import { StoreApi } from "zustand";
import { UseBoundStoreWithEqualityFn } from "zustand/traditional";
import { Provider } from "../contexts/WorkbenchStoreContext";
import { createWorkbenchStore } from "../store/store";
import { WorkbenchState } from "../types/store";
import { Part } from "./Part";

type WorkbenchProviderProps = {
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  parts: Part[];
};

export function WorkbenchProvider({ children, parts, initialHeight, initialWidth }: WorkbenchProviderProps) {
  const storeRef = React.useRef<UseBoundStoreWithEqualityFn<StoreApi<WorkbenchState>> | null>(null);

  if (!storeRef.current) {
    storeRef.current = createWorkbenchStore({
      parts,
      width: initialWidth,
      height: initialHeight,
    });
  }
  return <Provider value={storeRef.current}>{children}</Provider>;
}

WorkbenchProvider.displayName = "WorkbenchProvider";
