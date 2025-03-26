const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((sum, num) => sum + num, 0);

console.log(result);
