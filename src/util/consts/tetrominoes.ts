type Coordinates = [number, number][];

interface Shape {
  coordinates: Coordinates[];
  value: number;
}

export const SHAPE_I: Shape = {
  coordinates: [
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
  ],
  value: 1,
};

export const SHAPE_O: Shape = {
  coordinates: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  ],
  value: 2,
};

export const SHAPE_T: Shape = {
  coordinates: [
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
  ],
  value: 3,
};

export const SHAPE_J: Shape = {
  coordinates: [
    [
      [0, 1],
      [1, 1],
      [2, 0],
      [2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  ],
  value: 4,
};

export const SHAPE_L: Shape = {
  coordinates: [
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  ],
  value: 5,
};

export const SHAPE_S: Shape = {
  coordinates: [
    [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
  ],
  value: 6,
};

export const SHAPE_Z: Shape = {
  coordinates: [
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
  ],
  value: 7,
};
