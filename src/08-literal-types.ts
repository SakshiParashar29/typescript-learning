// Literal types in TypeScript restrict a variable to one specific value or a predefined set of values. They improve type safety by preventing unexpected values.

// String literal types
let direction: "north" | "south" | "east" | "west";
direction = "north";

// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6

// combining with other types
type SuccessResponse = {
    status: "success";
    data: any;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
