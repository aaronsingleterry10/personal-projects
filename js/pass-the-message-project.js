"use strict";

(function () {

    // let userInput = document.getElementById("message-input").value;

    document.getElementById("submit").addEventListener("click", () => {
        let userInput = document.getElementById("message-input").value;
        // console.log(userInput);
        document.getElementById("message").innerText = userInput;
        document.getElementById("message-input").value = "";
    })


})();