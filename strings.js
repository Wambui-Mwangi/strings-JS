//Extract the last four characters from the string below;"beautiful"
let word = "beautiful"
console.log(word[5], word[6], word[7], word[8]);

// Insert the following string at the fourth index of the below variable:"eat" const food = "I was feeling hungry today"
const food = "I was feeling hungry today"
let newVar = "eat"
console.log(`"I was ${newVar} feeling hungry today"`);

// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog"
const stories= "The quick brown fox jumps over the lazy dog"
console.log(stories.match(/the/g).length);
console.log(stories.match(/brown/g).length);

// Using JavaScript, find the following words from the following strings:
// 1. "now"
// const string1 = "We are now going to school";
// 2. "sitting"
// const string2 = "The child was sitting on the table before it fell"

const stringg = "We are now going to school";
console.log(stringg.includes("now"));
console.log(stringg.includes("sitting"));

// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "BEneath"
// 3. Title case "A beautiful wedding"


let z = "wonderful"
console.log(z.toUpperCase())
let x = "amazing"
let y = "BEneath"
console.log(x.toLocaleLowerCase())
console.log(y.toLocaleLowerCase())
let d="A beautiful wedding";
    d=d.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
       console.log(d);