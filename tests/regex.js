let desc = "::Ma description"; 
let link = "https://monsite.com";
let variation_ = "jab / cross/ uppercut";

let linkReg = new RegExp(/https:/);
let descReg = new RegExp(/::/);
let variationReg = new RegExp(/.+\s\/\s.+/);

console.log(link.match(linkReg));
console.log(desc.match(descReg));
console.log(variation_.match(variationReg));