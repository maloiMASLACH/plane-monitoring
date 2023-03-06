export interface TrajectoryType {
  time: number;
  x: number;
  y: number;
  id: string;
}

export interface InitialTrajectoryType {
  id: string;
  points: {
    time: number;
    x: number;
    y: number;
  }[];
}
