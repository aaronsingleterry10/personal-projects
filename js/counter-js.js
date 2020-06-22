"use strict";

(function () {
    let displayNum = parseInt(document.getElementById("number-display").innerText);

    document.getElementById("lower-count").addEventListener("click", () => {
        displayNum -= 1;
        document.getElementById("number-display").innerText = displayNum + "";
        document.getElementById("number-display").style.color = "red";
    });

    document.getElementById("add-count").addEventListener("click", () => {
        displayNum += 1;
        document.getElementById("number-display").innerText = displayNum + "";
        document.getElementById("number-display").style.color = "green";
    });
})();