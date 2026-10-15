// Union types (OR)

type status = "pending" | "approved" | "rejected"

// Intersection types (AND)

type Color = {
    color: string
}

type Circle = {
    radius: number
}

type ColorFulCircle = Color & Circle

let myCircle: ColorFulCircle = {
    color: "Red",
    radius:  4
}