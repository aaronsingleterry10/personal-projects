"use strict";

(function () {

    let hexColorArray = [
        "#CD5C5C",
        "#FF0000",
        "#FFC0CB",
        "#FF1493",
        "#FF8C00",
        "#FFFF00",
        "#FF00FF",
        "#FF00FF",
        "#663399",
        "#2E8B57",
        "#008B8B",
        "#00FFFF"
    ];

    document.getElementById("bg-color-change").addEventListener("click", function () {
        let randomNumber = Math.floor(Math.random() * ((hexColorArray.length - 1) - 0 + 1));

        document.getElementsByTagName("body")[0].style.backgroundColor = `${hexColorArray[randomNumber]}`;
        document.getElementById("bg-color-change").style.backgroundColor = `${hexColorArray[randomNumber]}`;
        document.getElementById("hex-code").innerText = `${hexColorArray[randomNumber]}`;
    })
})();