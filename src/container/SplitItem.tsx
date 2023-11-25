export const SplitItem = (
  props: { children: React.ReactNode; size: number; offset: number; orientation: "horizontal" | "vertical" },
) => (
  <div
    className="split-view-view"
    style={props.orientation === "vertical"
      ? {
        height: "100%",
        width: props.size,
        left: props.offset,
        position: "absolute",
      }
      : {
        height: props.size,
        width: "100%",
        top: props.offset,
        position: "absolute",
      }}
  >
    {props.orientation}
    {props.children}
  </div>
);
