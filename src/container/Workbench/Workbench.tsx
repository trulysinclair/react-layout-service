import React from "react";
import { WorkbenchProps } from "../../types/workbench-props";
import { GridView } from "../GridView";
import { WorkbenchWrapper } from "./WorkbenchWrapper";

export const Workbench = React.forwardRef<HTMLDivElement, WorkbenchProps>((
  {
    parts,
    grid,
    width,
    height,
    ...rest
  },
  ref,
) => (
  <div
    ref={ref}
    data-testid="workbench"
    style={{
      position: "relative",
      width: window.innerWidth,
      height: window.innerHeight,
    }}
    {...rest}
  >
    <WorkbenchWrapper
      parts={parts}
      width={width}
      height={height}
    >
      <GridView
        root={grid.root}
        width={grid.width}
        height={grid.height}
        orientation={grid.orientation}
      />
    </WorkbenchWrapper>
  </div>
));
