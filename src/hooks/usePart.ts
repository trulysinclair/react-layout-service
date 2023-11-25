export interface IPart {
  partId: string;
}

export const usePart = (partId: string): IPart => {
  return {
    partId,
  };
};
