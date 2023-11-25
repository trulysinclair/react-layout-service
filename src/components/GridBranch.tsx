import { SplitView } from "../container/SplitView";

export const GridBranch = (props: { children: React.ReactNode; orientation: "vertical" | "horizontal" }) => (
  <div
    className="grid-branch"
    style={{
      height: "100%",
      width: "100%",
    }}
  >
    <SplitView orientation={props.orientation}>
      {props.children}
    </SplitView>
  </div>
);
