import React, { useState } from "react";
import styled from "styled-components";
import { cellColors, fillGround } from "../../util/tetrominoes/color";
import { SHAPE_L } from "../../util/tetrominoes/shapes";

interface CellProps {
  cellType: number;
}

const GroundRow = styled.div`
  display: flex;
`;

const GroundCell = styled.div<CellProps>`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  background-color: ${(p) => cellColors[p.cellType]};
`;

const Ground = () => {
  const [groundData, setGroundData] = useState(
    new Array(20).fill(new Array(10).fill(0))
  );

  const testInsertShape = () => {
    const newGround = fillGround(
      groundData,
      SHAPE_L.coordinates[0],
      SHAPE_L.value
    );
    setGroundData(newGround);
  };

  return (
    <>
      {groundData.map((row, i) => (
        <GroundRow key={i}>
          {row.map((val: number, j: number) => (
            <GroundCell key={j} cellType={val} />
          ))}
        </GroundRow>
      ))}
      <div />
      <button onClick={testInsertShape}>Test set shape </button>
    </>
  );
};

export default Ground;
