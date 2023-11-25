import { renderNode } from "../util/renderNode";

export type GridViewProps = {
  root: GridNode;
  width: number;
  height: number;
  orientation: "horizontal" | "vertical";
};

export const GridView = ({ root, width, height, orientation }: GridViewProps) => {
  if (!root)
    throw new Error("Grid root is undefined");

  return (
    <div
      className="grid-view"
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {renderNode(root, orientation)}
    </div>
  );
};

export type Grid = {
  root: GridNode;
  width: number;
  height: number;
  orientation: "horizontal" | "vertical";
};

export type GridNode =
  | {
    type: "branch";
    size: number;
    nodes: GridNode[];
  }
  | {
    type: "leaf";
    id: string;
    size: number;
    visible: boolean;
  };
