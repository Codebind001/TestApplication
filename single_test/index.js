const express = require('express');

const app = express();
app.listen(3000, function () { console.log("Listening on Port 3000!") });

console.time("concatenation");
let output = "";
for (var i = 1; i <= 1e6; i++) {
  output += i;
}

// ... and stop.
console.timeEnd("concatenation");

app.get('/', function (req, res) {
    res.json({ name: "A. Rahman" });
})