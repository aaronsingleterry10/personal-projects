"use strict";
(function () {
    console.log("hello from simon");

    let simonColorArray = [];
    let userColorArray = [];

    document.getElementById("start").addEventListener("click", () => {
        let count = 0;
        let max = 1;
        let interval = 700;
        let newCount = 0;
        let exampleArray = ["blue", "green", "red"];
        let newMax = exampleArray.length;

        // let timeInterval = setInterval(() => {
        //     if (count >= max) {
        //         clearInterval(timeInterval);
        //         console.log("All done");
        //         document.getElementById("green").style.backgroundColor = "#fff";
        //     } else {
        //         count++;
        //         document.getElementById("green").style.backgroundColor = "green";
        //         simonColorArray.push("green");
        //     }
        // }, interval);

        let timeInterval = setInterval(() => {
            if (newCount >= newMax) {
                document.getElementById(exampleArray[newCount - 1]).style.backgroundColor = "#fff";
                clearInterval(timeInterval);
                // console.log("All done");
            } else {
                // count++;
                document.getElementById(exampleArray[newCount]).style.backgroundColor = exampleArray[newCount];
                // simonColorArray.push("green");
                if (newCount > 0) {
                    document.getElementById(exampleArray[newCount - 1]).style.backgroundColor = "#fff";
                }
            }
            newCount++;
        }, interval);

    });

    // Green Button
    document.getElementById("green").addEventListener("mousedown", () => {
        document.getElementById("green").style.backgroundColor = "green";
    });

    document.getElementById("green").addEventListener("mouseup", () => {
        document.getElementById("green").style.backgroundColor = "#fff";
        userColorArray.push("green");
        // if (simonColorArray[0] === userColorArray[0]) {
        //     console.log("Completed round one");
        // } else {
        //     console.log("Wrong color");
        // }
        // console.log(userColorArray);
        // userColorArray = [];
    });

    // Red Button
    document.getElementById("red").addEventListener("mousedown", () => {
        document.getElementById("red").style.backgroundColor = "red";
    });

    document.getElementById("red").addEventListener("mouseup", () => {
        document.getElementById("red").style.backgroundColor = "#fff";
        userColorArray.push("red");
        // if (simonColorArray[0] === userColorArray[0]) {
        //     console.log("Completed round one");
        // } else {
        //     console.log("Wrong color");
        // }
        // console.log(userColorArray);
        // userColorArray = [];
    });

    // Yellow Button
    document.getElementById("yellow").addEventListener("mousedown", () => {
        document.getElementById("yellow").style.backgroundColor = "yellow";
    });

    document.getElementById("yellow").addEventListener("mouseup", () => {
        document.getElementById("yellow").style.backgroundColor = "#fff";
        userColorArray.push("yellow");
        // if (simonColorArray[0] === userColorArray[0]) {
        //     console.log("Completed round one");
        // }
    });

    // Blue Button
    document.getElementById("blue").addEventListener("mousedown", () => {
        document.getElementById("blue").style.backgroundColor = "blue";
    });

    document.getElementById("blue").addEventListener("mouseup", () => {
        document.getElementById("blue").style.backgroundColor = "#fff";
        userColorArray.push("blue");
        // if (simonColorArray[0] === userColorArray[0]) {
        //     console.log("Completed round one");
        // }
    });


    function userVsSimonArrays(userArray, simonArray) {
        return userArray.length === simonArray.length && userArray.every((value, index) => value === simonArray[index]);
    }


})();