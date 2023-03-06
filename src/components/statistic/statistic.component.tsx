/* eslint-disable react/no-array-index-key */
import React from "react";
import "./statistic.styles.css";

import { StatisticProps } from "./statistic.model";
import { useGetStatistic } from "../../hooks";

export const Statistic: React.FC<StatisticProps> = ({ data }) => {
  const stats = useGetStatistic(data);
  return (
    <div className="statisticWrapper">
      <h3>Statistic</h3>
      <p>{`Stops count: ${stats.stopsCount};`}</p>
      <p>{`Distance: ${stats.distance};`}</p>
      <p>{`Fly time: ${stats.time};`}</p>
      <p>{`Average fly speed: ${stats.avgSpeed};`}</p>
    </div>
  );
};
