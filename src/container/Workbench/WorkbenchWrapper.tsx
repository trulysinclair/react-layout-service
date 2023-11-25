import React from "react";
import { Part } from "../../components/Part";
import { WorkbenchProvider } from "../../components/WorkbenchProvider";
import { WorkbenchStoreContext } from "../../contexts/WorkbenchStoreContext";

type WorkbenchWrapperProps = {
  children: React.ReactNode;
  parts: Part[];
  width?: number;
  height?: number;
};

export function WorkbenchWrapper({
  children,
  parts,
  width,
  height,
}: WorkbenchWrapperProps) {
  const isWrapped = React.useContext(WorkbenchStoreContext);

  if (isWrapped) {
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return <>{children}</>;
  }

  return (
    <WorkbenchProvider
      parts={parts}
      initialWidth={width}
      initialHeight={height}
    >
      {children}
    </WorkbenchProvider>
  );
}

WorkbenchWrapper.displayName = "WorkbenchWrapper";
