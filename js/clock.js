"use strict";
(function () {
    console.log("test");

    setInterval(() => {
        let d = new Date();
        let hour = d.getHours();
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
        //morning
        if (hour <= 10 || hour >= 6) {
            document.body.style.backgroundImage = "url('img/morning.jpg')";
        }
        //daytime
        if (hour <= 16 || hour >= 11) {
            document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        }
        //night time
        if (hour >= 21 || hour <= 5) {
            document.body.style.backgroundImage = "url('img/night.jpg')"
        }
    }, 1000);

    // let d = new Date();


})();