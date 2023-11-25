import React from "react";
import { PartIdContext } from "../contexts/PartIdContext";

export const usePartId = (): string | null => {
  return React.useContext(PartIdContext);
};
