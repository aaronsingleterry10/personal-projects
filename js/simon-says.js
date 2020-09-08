"use strict";
(function () {
    console.log("hello from simon");

    // let simonColorArray = [];
    // let exampleArray = ["blue", "green", "red", "green", "green"];
    let simonColors = ["green"];

        let count = 0;
        let max = 1;
        let userColorArray = [];
        let interval = 700;
        let newCount = 0;
        let newMax = simonColors.length;
    document.getElementById("start").addEventListener("click", () => {

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

        // let timeInterval = setInterval(() => {
        //     if (newCount >= newMax) {
        //         // document.getElementById(exampleArray[newCount - 1]).style.backgroundColor = "#fff";
        //         clearInterval(timeInterval);
        //         // console.log("All done");
        //     } else {
        //         // // count++;
        //         // document.getElementById(exampleArray[newCount]).style.backgroundColor = exampleArray[newCount];
        //         // // simonColorArray.push("green");
        //         // if (newCount > 0) {
        //         //     document.getElementById(exampleArray[newCount - 1]).style.backgroundColor = "#fff";
        //         // }
        //         let myCount = 0;
        //         let myMax = 1;
        //         let nestedInterval = setInterval(() => {
        //             if (myCount >= myMax) {
        //                 document.getElementById(simonColors[newCount - 1]).style.backgroundColor = "#fff";
        //                 clearInterval(nestedInterval);
        //             } else {
        //                 myCount++;
        //                 console.log(newCount - 1);
        //                 document.getElementById(simonColors[newCount - 1]).style.backgroundColor = simonColors[newCount - 1];
        //             }
        //         }, 300);
        //     }
        //     if (userVsSimonArrays(userColorArray, simonColors)) {
        //         console.log("Testing 123");
        //     }
        //     newCount++;
        // }, interval);

        startSimonGame();
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

            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
            }
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
            console.log(userColorArray);

            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
            }
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

            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
            }
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

            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
            }
        });
    });

    function startSimonGame() {
        let timeInterval = setInterval(() => {
            if (newCount >= newMax) {
                // document.getElementById(exampleArray[newCount - 1]).style.backgroundColor = "#fff";
                clearInterval(timeInterval);
                // console.log("All done");
            } else {
                // // count++;
                // document.getElementById(exampleArray[newCount]).style.backgroundColor = exampleArray[newCount];
                // // simonColorArray.push("green");
                // if (newCount > 0) {
                //     document.getElementById(exampleArray[newCount - 1]).style.backgroundColor = "#fff";
                // }
                let myCount = 0;
                let myMax = 1;
                let nestedInterval = setInterval(() => {
                    if (myCount >= myMax) {
                        document.getElementById(simonColors[newCount - 1]).style.backgroundColor = "#fff";
                        clearInterval(nestedInterval);
                    } else {
                        myCount++;
                        console.log(newCount - 1);
                        document.getElementById(simonColors[newCount - 1]).style.backgroundColor = simonColors[newCount - 1];
                    }
                }, 300);
            }
            newCount++;
        }, interval);
    }

    // Returns true or false of whether two arrays are the same
    function userVsSimonArrays(userArray, simonArray) {
        return userArray.length === simonArray.length && userArray.every((value, index) => value === simonArray[index]);
    }

    function addingToArray (staticArray, dynamicArray) {
        let randomNum = Math.floor((Math.random() * (staticArray.length - 1)));
        dynamicArray.push(staticArray[randomNum]);
        return dynamicArray;
    }
})();