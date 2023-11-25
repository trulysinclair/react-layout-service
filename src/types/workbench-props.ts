import { Part } from "../components/Part";
import { Grid } from "../container/GridView";

export type WorkbenchProps = {
  parts: Part[];
  width?: number;
  height?: number;
  grid: Grid;
};
