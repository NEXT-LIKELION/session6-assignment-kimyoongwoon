const jsonString = JSON.stringify([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
]);

const parsedData = JSON.parse(jsonString);

const extractedData = parsedData.map((item) => {
    const { id, name, age } = item;
    return { id, name, age };
});

console.log(extractedData);
