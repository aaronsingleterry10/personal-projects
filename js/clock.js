"use strict";
(function () {
    console.log("test");

    setInterval(() => {
        let d = new Date();
        document.getElementById("hours").innerText = d.getHours() - 12 + " : ";
        document.getElementById("minutes").innerText = d.getMinutes() + " : ";
        document.getElementById("seconds").innerText = "" + d.getSeconds();
    }, 1000);
})();