let desc = "::Ma description"; 
let link = "https://monsite.com";
let variation_ = "jab / cross/ uppercut";

let linkReg = new RegExp(/https:\/\/\w+.com/);
let descReg = new RegExp(/(::)(\w+\s\w+)/);
let variationReg = new RegExp(/\s?(\w+)\s?\//);


test ("get link data", () => {
    expect(link.match(linkReg)[0]).toBe('https://monsite.com');
})

test("get description", () => {
    expect(desc.match(descReg)[2]).toBe('Ma description');
})

test("get variations", () =>{
    expect(variation_.group(variationReg)).toBe(["jab","cross","uppercut"]);
})

