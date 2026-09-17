// const fs = require("fs");

// fs.readFile("day3.txt", "utf8", (err, data) => {

//     if (err) {
//         console.log("Error:", err);
//         return;
//     }

//     console.log(data);
// });

// console.log("Reading file...");

const fs = require("fs");

fs.writeFile(
    "day.txt",
    "My name is Prabhat.",
    "utf8",
    (err) => {

        if (err) {
            console.log("Error:", err);
            return;
        }

        console.log("File written successfully!");
    }
);