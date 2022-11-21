import React from "react";

import "./Backtop.scss";
export type BacktopProps = { timeWait?: number; postion?: number };

export const Backtop: React.FC<BacktopProps> = ({ timeWait = 0, postion = 0 }) => {
  return <div>Backtop</div>;
};
