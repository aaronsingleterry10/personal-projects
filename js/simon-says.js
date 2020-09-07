"use strict";
(function () {
    console.log("hello from simon");

    let simonColorArray = [];
    let userColorArray = [];

    document.getElementById("start").addEventListener("click", () => {
        let count = 0;
        let max = 1;
        let interval = 300;

        let timeInterval = setInterval(() => {
            if (count >= max) {
                clearInterval(timeInterval);
                console.log("All done");
                document.getElementById("green").style.backgroundColor = "#fff";
            } else {
                count++;
                document.getElementById("green").style.backgroundColor = "green";
                simonColorArray.push("green");
            }
        }, interval);
    });

    // Green Button
    document.getElementById("green").addEventListener("mousedown", () => {
        document.getElementById("green").style.backgroundColor = "green";
    });

    document.getElementById("green").addEventListener("mouseup", () => {
       document.getElementById("green").style.backgroundColor = "#fff" ;
       userColorArray.push("green");
       if (simonColorArray[0] === userColorArray[0]) {
           console.log("Completed round one");
       } else {
           console.log("Wrong color");
       }
    });

    // Red Button
    document.getElementById("red").addEventListener("mousedown", () => {
        document.getElementById("red").style.backgroundColor = "red";
    });

    document.getElementById("red").addEventListener("mouseup", () => {
        document.getElementById("red").style.backgroundColor = "#fff" ;
        userColorArray.push("red");
        if (simonColorArray[0] === userColorArray[0]) {
            console.log("Completed round one");
        } else {
            console.log("Wrong color");
        }
    });

    // Yellow Button
    document.getElementById("yellow").addEventListener("mousedown", () => {
        document.getElementById("yellow").style.backgroundColor = "yellow";
    });

    document.getElementById("yellow").addEventListener("mouseup", () => {
        document.getElementById("yellow").style.backgroundColor = "#fff" ;
        // userColorArray.push("green");
        // if (simonColorArray[0] === userColorArray[0]) {
        //     console.log("Completed round one");
        // }
    });

    // Blue Button
    document.getElementById("blue").addEventListener("mousedown", () => {
        document.getElementById("blue").style.backgroundColor = "blue";
    });

    document.getElementById("blue").addEventListener("mouseup", () => {
        document.getElementById("blue").style.backgroundColor = "#fff" ;
        // userColorArray.push("green");
        // if (simonColorArray[0] === userColorArray[0]) {
        //     console.log("Completed round one");
        // }
    });

})();