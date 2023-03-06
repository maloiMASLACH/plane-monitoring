import { TrajectoryType } from "../types";

export const useGetRoadMap = (data: TrajectoryType[]) => {
  const result = `${data.reduce(
    (acc, curr) => `${acc}  -->  ${curr.id}:(x: ${curr.x}, y: ${curr.y}) `,
    "Start point"
  )}`;
  return result;
};
