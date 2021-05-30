import React, { useState } from "react";

const Ground = () => {
  const [groundData, setGroundData] = useState(
    new Array(20).fill(new Array(10).fill(0))
  );

  const renderCell = (val: number) => {
    let className = "empty";
    if (val !== 0) className = `filled-${val}`;
    return <div className={className} />;
  };

  return (
    <div>
      {groundData.map((row) => (
        <div className="ground-row">
          {row.map((val: number) => renderCell(val))}
        </div>
      ))}
    </div>
  );
};

export default Ground;
