import { GridBranch } from "../components/GridBranch";
import { GridNode } from "../container/GridView";
import { SplitItem } from "../container/SplitItem";

export function renderNode(node: GridNode, orientation: "horizontal" | "vertical") {
  console.log(orientation);
  switch (node.type) {
    case "branch":
      return (
        <GridBranch orientation={orientation}>
          {node.nodes.map((node) => renderNode(node, "vertical"))}
        </GridBranch>
      );
    case "leaf":
      return (
        <SplitItem
          offset={node.size}
          orientation={orientation}
          size={node.size}
        >
          {node.id}
        </SplitItem>
      );
  }
}
