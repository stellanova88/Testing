import { addNumbers } from "../src"

it ("should return 5 when called", () => {
    const result = addNumbers(2 , 5)

    expect(result).toBe(7)
})

