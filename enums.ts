//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric.

//Numeric enums default
enum dir{
    North,
    East,
    South,
    West
}
//enum by default assigns value 0 to the first enum value

let curDir1 = dir.North;
console.log(curDir1);
let curDir2 = dir.East;
console.log(curDir2);
let curDir3 = dir.West;
console.log(curDir3);

// Numeric enums Initialized

enum CardinalDirections {
    North = 2,
    East,
    South,
    West
  }

  console.log(CardinalDirections.North);
  console.log(CardinalDirections.West);

  //Numeric Enums - Fully Initialized

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);

  //String Enums
  enum crd {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  console.log(crd.North);
  console.log(crd.West);

  