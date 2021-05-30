import { Coordinates } from "./shapes";

export const cellColors: { [index: number]: any } = {
  0: "#FFFFFF",
  1: "#17FFFF",
  2: "#FFFC01",
  3: "#FD2AFF",
  4: "#012EFF",
  5: "#FE8100",
  6: "#21FC01",
  7: "#FE0000",
};

export const fillGround = (groundData: number[][], coordinates: Coordinates, value: number) => {
  const newGround = JSON.parse(JSON.stringify(groundData));
  coordinates.forEach(([x, y]) => {
    newGround[x][y] = value;
  });
  return newGround;
};
