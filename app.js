//"Tue, 24 Mar 2020 09:30:28 GMT"
const express = require("express");
const app = express();
const delay = process.env.DELAY;
const stopTime = process.env.STOP_TIME;

app.get("/users", (req, res, next) => {
    res.setHeader("Content-type", "text/html; charset=utf8");
    res.setHeader("Transfer-Encoding", "chunked");
    const logs = setInterval(() => {
        console.log(new Date().toUTCString());
    }, delay);

    setTimeout(() => {
        clearInterval(logs);
        res.send(new Date().toUTCString());
    }, stopTime);
});

app.listen(3000, () => {
    console.log("Start localhost on port 3000");
});
