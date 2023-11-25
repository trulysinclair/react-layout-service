import React from "react";

export const PartIdContext = React.createContext<string | null>(null);
export const Provider = PartIdContext.Provider;
export const Consumer = PartIdContext.Consumer;
