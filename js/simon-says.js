"use strict";
(function () {
    // let simonColorArray = [];
    let colors = ["green", "red", "blue", "yellow"];
    let simonColors = ["green"];
    let count = 0;
    let userColorArray = [];
    let interval = 700;
    let newCount = 0;
    let newMax = simonColors.length;
    document.getElementById("start").addEventListener("click", () => {
        let round = 1;
        document.getElementById("round").innerText = "Round: " + round;
        startSimonGame();
        // Green Button
        document.getElementById("green").addEventListener("mousedown", () => {
            document.getElementById("green").style.backgroundColor = "green";
        });

        document.getElementById("green").addEventListener("mouseup", () => {
            document.getElementById("green").style.backgroundColor = "lightgreen";
            userColorArray.push("green");
            console.log("user: ", userColorArray);
            console.log("simon: ", simonColors);
            compareUserInputVsSimon(userColorArray, simonColors);
            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("Success!");
                addingToArray(colors, simonColors);
                newCount = 0;
                newMax = simonColors.length;
                userColorArray = [];
                round += 1;
                count = 0;
                document.getElementById("round").innerText = "Round: " + round;
                startSimonGame();
            }
        });

        // Red Button
        document.getElementById("red").addEventListener("mousedown", () => {
            document.getElementById("red").style.backgroundColor = "red";
        });

        document.getElementById("red").addEventListener("mouseup", () => {
            document.getElementById("red").style.backgroundColor = "lightcoral";
            userColorArray.push("red");
            console.log("user: ", userColorArray);
            console.log("simon: ", simonColors);
            compareUserInputVsSimon(userColorArray, simonColors);
            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
                addingToArray(colors, simonColors);
                newCount = 0;
                newMax = simonColors.length;
                userColorArray = [];
                round += 1;
                count = 0;
                document.getElementById("round").innerText = "Round: " + round;
                startSimonGame();
            }
        });

        // Yellow Button
        document.getElementById("yellow").addEventListener("mousedown", () => {
            document.getElementById("yellow").style.backgroundColor = "yellow";
        });

        document.getElementById("yellow").addEventListener("mouseup", () => {
            document.getElementById("yellow").style.backgroundColor = "lightyellow";
            userColorArray.push("yellow");
            console.log("user: ", userColorArray);
            console.log("simon: ", simonColors);
            compareUserInputVsSimon(userColorArray, simonColors);
            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
                addingToArray(colors, simonColors);
                newCount = 0;
                newMax = simonColors.length;
                userColorArray = [];
                round += 1;
                count = 0;
                document.getElementById("round").innerText = "Round: " + round;
                startSimonGame();
            }
        });

        // Blue Button
        document.getElementById("blue").addEventListener("mousedown", () => {
            document.getElementById("blue").style.backgroundColor = "blue";
        });

        document.getElementById("blue").addEventListener("mouseup", () => {
            document.getElementById("blue").style.backgroundColor = "lightblue";
            userColorArray.push("blue");
            console.log("user: ", userColorArray);
            console.log("simon: ", simonColors);
            compareUserInputVsSimon(userColorArray, simonColors);
            if (userVsSimonArrays(userColorArray, simonColors)) {
                console.log("First round success!");
                addingToArray(colors, simonColors);
                newCount = 0;
                newMax = simonColors.length;
                userColorArray = [];
                round += 1;
                count = 0;
                document.getElementById("round").innerText = "Round: " + round;
                startSimonGame();
            }
        });
        document.getElementById("start").remove();
    });

    function startSimonGame() {
        let timeInterval = setInterval(() => {
            if (newCount >= newMax) {
                document.getElementById("turn").innerText = "Your turn";
                clearInterval(timeInterval);
            } else {
                document.getElementById("turn").innerText = "Simon's turn";
                let myCount = 0;
                let myMax = 1;
                let nestedInterval = setInterval(() => {
                    if (myCount >= myMax) {
                        if (simonColors[newCount - 1] === "red") {
                            document.getElementById("red").style.backgroundColor = "lightcoral";
                        } else {
                            document.getElementById(simonColors[newCount - 1]).style.backgroundColor = "light" + simonColors[newCount - 1];
                            clearInterval(nestedInterval);
                        }
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

    function addingToArray(staticArray, dynamicArray) {
        let randomNum = Math.floor((Math.random() * (staticArray.length - 1)));
        dynamicArray.push(staticArray[randomNum]);
        return dynamicArray;
    }

    function compareUserInputVsSimon(userArray, simonArray) {
        console.log(count);
        console.log(userArray[count], simonArray[count])
        if (userArray[count] === simonArray[count]) {
            console.log("so far so good");
            count += 1;
        } else {
            document.getElementById("wrapper").innerHTML = "<div id='wrong' style='color: #262124'>WRONG!!</div>"
            document.getElementById("start-button").innerHTML = "<div id='start' onclick='location.reload();'>Click to try again</div>"
            console.log("wrong, try again");
            count = 0;
        }
    }
})();