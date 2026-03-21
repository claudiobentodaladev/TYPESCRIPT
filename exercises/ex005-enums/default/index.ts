// Enums (enumeration) is a way to crete enumerated constant named

enum Directions {
  // like this, the elemets are a number in enums positions
  Noth,
  South,
  East,
  West,
}

interface Position {
  x: number;
  y: number;
  direction: Directions;
}
const position: Position = {
  x: 333,
  y: 312,
  direction: Directions.East,
};
