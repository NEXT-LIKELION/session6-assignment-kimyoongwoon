const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

const result = users.map((user) => {
    const { name, age } = user;
    const status = age >= 18 ? "성인" : "미성년자";
    return { name, age, status };
});

console.log(result);
