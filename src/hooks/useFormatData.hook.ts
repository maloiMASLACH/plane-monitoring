import { InitialTrajectoryType, TrajectoryType } from "../types";

export const useFormatData = (data: InitialTrajectoryType) => {
  const sortedData = data.points.sort((a, b) => (a.time > b.time ? 1 : -1));

  const result: TrajectoryType[] = sortedData.map((el, index) => ({
    ...el,
    id: `${index + 1}`,
  }));

  return result;
};
