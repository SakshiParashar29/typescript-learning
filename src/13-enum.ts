enum Direction {
    Up = 1,
    Down,
    Left,
    Right
    // here auto down takes 2, left 3 and right value 4
}

let dir : Direction = Direction.Right; 

// String enum
enum Status {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED",
};

let stat: Status = Status.Pending;

// Const enum (more performant)
const enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
};

function handleResponse(status: HttpStatus) : void {
    if(status === HttpStatus.OK){
        console.log("Success!");
    }
}
