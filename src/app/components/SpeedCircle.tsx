import React from "react";

type Props = {
  speed: number | null;
  isRunning: boolean;
};

const SpeedCircle: React.FC<Props> = ({ speed, isRunning }) => {
  return (
    <div className="w-40 h-40 border-4 border-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
      {isRunning ? `${speed?.toFixed(1) || 0} Mbps` : "Ready"}
    </div>
  );
};

export default SpeedCircle;
