import ClientDOM from "react-dom/client";
import "./index.css";

export type Part = {
  id: string;
  part: () => JSX.Element;
};

const Part = (props: Part) => {
  return <div id={props.id}>{props.part()}</div>;
};

const Grid = (props: { children: React.ReactNode }) => (
  <div
    className="grid-view"
    style={{
      height: "100%",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Branch orientation="vertical">
      {props.children}
    </Branch>
  </div>
);

const Branch = (props: { children: React.ReactNode; orientation: "vertical" | "horizontal" }) => (
  <div
    className="grid-branch"
    style={{
      height: "100%",
      width: "100%",
    }}
  >
    <Split orientation={props.orientation}>
      {props.children}
    </Split>
  </div>
);

const Split = (props: { children: React.ReactNode; orientation: "vertical" | "horizontal" }) => (
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

type WorkbenchProps = {
  children: React.ReactNode;
};

const Workbench = (props: WorkbenchProps) => (
  <div
    style={{
      position: "relative",
      width: window.innerWidth,
      height: window.innerHeight,
    }}
  >
    <Grid>
      {props.children}
    </Grid>
  </div>
);

const SplitItem = (
  props: { children: React.ReactNode; size: number; offset: number; orientation: "horizontal" | "vertical" },
) => (
  <div
    className="split-view-view"
    style={props.orientation === "horizontal"
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
    {props.children}
  </div>
);

export default Workbench;

ClientDOM.createRoot(
  document.getElementById("workbench"),
).render(
  <Workbench>
    <SplitItem offset={0} orientation="vertical" size={28}>
      <Part
        id="workbench.part.titlebar"
        part={() => (
          <header
            style={{
              height: 28,
              width: "100%",
              border: "1px solid black",
            }}
          >
            titlebar
          </header>
        )}
      />
    </SplitItem>
    <SplitItem offset={29} orientation="vertical" size={600}>
      <Branch orientation="horizontal">
        <SplitItem offset={0} orientation="horizontal" size={48}>
          <Part
            id="workbench.part.activitybar"
            part={() => (
              <div
                style={{
                  height: "100%",
                  width: 48,
                  border: "1px solid black",
                }}
              >
                activitybar
              </div>
            )}
          />
        </SplitItem>
        <SplitItem offset={49} orientation="horizontal" size={200}>
          <Part
            id="workbench.part.sidebar"
            part={() => (
              <div style={{
                height: "100%",
                width: 200,
                border: "1px solid black",
              }}>
                sidebar
              </div>
            )}
          />
        </SplitItem>
        <SplitItem offset={250} orientation="horizontal" size={400}>
          <Part
            id="workbench.part.content"
            part={() => (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid black",
                }}
              >
                content
              </div>
            )}
          />
        </SplitItem>
      </Branch>
    </SplitItem>
    <SplitItem offset={628} orientation="vertical" size={22}>
      <Part
        id="workbench.part.statusbar"
        part={() => (
          <footer
            style={{
              height: 22,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            statusbar
          </footer>
        )}
      />
    </SplitItem>
  </Workbench>,
);
