const person = {
    name: "david",
    city: "london",
    age: 30,
};

for (let key in person) {
    if (typeof person[key] === "string") {
        person[key] = person[key] + "(확인됨)";
    }
}

console.log(person);

const words = ["apple", "banana", "cherry", "fig", "grape", "melon"];
const longWords = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        longWords.push(words[i]);
    }
}

console.log(longWords);
