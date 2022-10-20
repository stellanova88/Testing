import { addNumbers, subtractNumbers } from "../src"

it ("should return 7 when called with 2 + 5", () => {
    const result = addNumbers(2 , 5)
    expect(result).toBe(7)
    
})

it("should return 0 when subtractNumber is called with (3,3)", () =>{
    const result = subtractNumbers(3,3)
    expect(result).toBe(0)
})