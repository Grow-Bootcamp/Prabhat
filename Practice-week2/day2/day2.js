//cache

const cache = new Map();

function getUser(id) {
    if (cache.has(id)) {
        console.log("Getting from cache");
        return cache.get(id);
    }

    const user = {
        id: id,
        name: "Ram"
    };

    cache.set(id, user);
    return user;
}

console.log(getUser(1));
console.log(getUser(1));

// CORS

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000"
}));

//  

let age = 20;
age = "hello"; // allowed
console.log(age);
