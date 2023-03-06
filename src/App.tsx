import React, { useState } from "react";
import "./App.css";
import { trajectories } from "./constants";
import {
  RoadMap, Select, Statistic, Table
} from "./components";
import { useFormatData } from "./hooks";

const App = () => {
  const [selected, setSelected] = useState(0);

  const handleChangePlane = (id: number) => setSelected(id);

  const data = useFormatData(trajectories[selected]);

  return (
    <div className="pageWrapper">
      <h1 className="pageTitle">Plane fly statistic</h1>

      <Table planeId={selected} data={data} />
      <RoadMap data={data} />
      <Select
        selected={selected}
        setSelected={handleChangePlane}
        arrayLength={trajectories.length}
      />
      <Statistic data={data} />
    </div>
  );
};

export default App;
