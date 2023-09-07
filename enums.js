//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric.
//Numeric enums default
var dir;
(function (dir) {
    dir[dir["North"] = 0] = "North";
    dir[dir["East"] = 1] = "East";
    dir[dir["South"] = 2] = "South";
    dir[dir["West"] = 3] = "West";
})(dir || (dir = {}));
//enum by default assigns value 0 to the first enum value
var curDir1 = dir.North;
console.log(curDir1);
var curDir2 = dir.East;
console.log(curDir2);
var curDir3 = dir.West;
console.log(curDir3);
// Numeric enums Initialized
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 2] = "North";
    CardinalDirections[CardinalDirections["East"] = 3] = "East";
    CardinalDirections[CardinalDirections["South"] = 4] = "South";
    CardinalDirections[CardinalDirections["West"] = 5] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
//Numeric Enums - Fully Initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
//String Enums
var crd;
(function (crd) {
    crd["North"] = "North";
    crd["East"] = "East";
    crd["South"] = "South";
    crd["West"] = "West";
})(crd || (crd = {}));
;
console.log(crd.North);
console.log(crd.West);
