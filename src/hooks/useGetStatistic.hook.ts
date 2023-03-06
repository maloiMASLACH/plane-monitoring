import { StatisticType, TrajectoryType } from "../types";

export const useGetStatistic = (data: TrajectoryType[]) => {
  const stopsCount = data.length;
  const time = data[data.length - 1].time - data[0].time;

  const distance = +data
    .reduce(
      (acc, curr, index) =>
        acc
        + (index !== 0
          ? Math.sqrt(
            (curr.x - data[index - 1].x) ** 2
                + (curr.y - data[index - 1].y) ** 2
          )
          : 0),
      0
    )
    .toFixed(2);

  const avgSpeed = +(+distance / time).toFixed(2);

  const result: StatisticType = {
    stopsCount,
    time,
    distance,
    avgSpeed,
  };

  return result;
};
