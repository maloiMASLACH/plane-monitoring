/* eslint-disable react/no-array-index-key */
import React from "react";
import "./road-map.styles.css";

import { RoadMapProps } from "./road-map.model";
import { useGetRoadMap } from "../../hooks";

export const RoadMap: React.FC<RoadMapProps> = ({ data }) => {
  const road = useGetRoadMap(data);
  return (
    <div className="roadMapWrapper">
      <h3>Road map</h3>
      {road}
    </div>
  );
};
