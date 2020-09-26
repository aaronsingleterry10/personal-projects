"use strict";
(function () {
    console.log("test");

    setInterval(() => {
        let d = new Date();
        if (d.getHours() < 10) {
            document.getElementById("hours").innerText = "0" + d.getHours() - 12 + " : ";
        } else {
            document.getElementById("hours").innerText = d.getHours() - 12 + " : ";
        }
        if (d.getMinutes() < 10) {
            document.getElementById("minutes").innerText = "0" + d.getMinutes() + " : ";
        } else {
            document.getElementById("minutes").innerText = d.getMinutes() + " : ";
        }
        if (d.getSeconds() < 10) {
            document.getElementById("seconds").innerText = "0" + d.getSeconds();
        } else {
            document.getElementById("seconds").innerText = "" + d.getSeconds();
        }

        if (d.getHours() < 12) {
            document.querySelector("body").style.backgroundImage =
        }
    }, 1000);
})();