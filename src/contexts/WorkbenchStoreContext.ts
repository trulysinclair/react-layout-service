import React from "react";
import { createWorkbenchStore } from "../store/store";

export const WorkbenchStoreContext = React.createContext<ReturnType<typeof createWorkbenchStore> | null>(null);

export const Provider = WorkbenchStoreContext.Provider;
