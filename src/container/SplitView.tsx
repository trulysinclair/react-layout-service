export const SplitView = (props: { children: React.ReactNode; orientation: "vertical" | "horizontal" }) => (
  <div
    className="split-view"
    style={{
      height: "100%",
      width: "100%",
      position: "relative",
    }}
  >
    <div className="sash-container"></div>
    <div className={`scrollable ${props.orientation}`}>
      <div className="split-view-container">
        {props.children}
      </div>
    </div>
  </div>
);
