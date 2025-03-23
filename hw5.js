const user = {
    id: 101,
    name: "Eve",
    email: "evw@example.com",
    role: "admin",
};

function getUserData(obj, key) {
    if (key in obj) {
        const valueWithDot = obj.id ? true : false;
        const valueWithBracket = obj[key];

        return valueWithBracket;
    } else {
        return "키 없음";
    }
}

console.log(getUserData(user, "name"));
console.log(getUserData(user, "email"));
console.log(getUserData(user, "age"));
