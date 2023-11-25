export type Part = {
  id: string;
  minimumWidth: number;
  maximumWidth: number;
  minimumHeight: number;
  maximumHeight: number;
  children?: React.ReactNode;
};

export const Part = (props: Part) => {
  return (
    <div id={props.id} style={{
      height: props.minimumHeight,
      width: props.minimumWidth,
      border: "1px solid black",
    }}>
      {props.children}
    </div>
  );
};
