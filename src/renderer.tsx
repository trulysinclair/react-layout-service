import ClientDOM from "react-dom/client";
import { Workbench } from "./container/Workbench/Workbench";
import "./index.css";

const workbench = ClientDOM.createRoot(
  document.getElementById("workbench"),
);

workbench.render(
  <Workbench
    parts={[
      {
        id: "workbench.part.titlebar",
        minimumWidth: 0,
        maximumWidth: window.innerWidth,
        minimumHeight: 28,
        maximumHeight: 28,
      },
      {
        id: "workbench.part.activitybar",
        minimumWidth: 48,
        maximumWidth: 48,
        minimumHeight: 0,
        maximumHeight: window.innerHeight - 28 - 22,
      },
      {
        id: "workbench.part.sidebar",
        minimumWidth: 200,
        maximumWidth: 200,
        minimumHeight: 0,
        maximumHeight: window.innerHeight - 28 - 22,
      },
      {
        id: "workbench.part.content",
        minimumWidth: 0,
        maximumWidth: window.innerWidth - 250,
        minimumHeight: 0,
        maximumHeight: window.innerHeight - 28 - 22,
      },
      {
        id: "workbench.part.statusbar",
        minimumWidth: 0,
        maximumWidth: window.innerWidth,
        minimumHeight: 22,
        maximumHeight: 22,
      },
    ]}
    grid={{
      root: {
        nodes: [
          {
            type: "leaf",
            id: "workbench.part.titlebar",
            size: 28,
            visible: true,
          },
          {
            type: "branch",
            size: window.innerHeight - 28 - 22,
            nodes: [
              {
                type: "leaf",
                id: "workbench.part.activitybar",
                size: 48,
                visible: true,
              },
              {
                type: "leaf",
                id: "workbench.part.sidebar",
                size: 200,
                visible: true,
              },
              {
                type: "leaf",
                id: "workbench.part.content",
                size: window.innerWidth - 250,
                visible: true,
              },
            ],
          },
          {
            type: "leaf",
            id: "workbench.part.statusbar",
            size: 22,
            visible: true,
          },
        ],
        size: window.innerWidth,
        type: "branch",
      },
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: "vertical",
    }}
  />,
);

// workbench.unmount();
