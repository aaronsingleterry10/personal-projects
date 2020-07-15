"use strict";

(function () {

    let puppies = [
        "url('img/puppies0.jpeg')",
        "url('img/puppies1.jpeg')",
        "url('img/puppies2.jpeg')",
        "url('img/puppies3.jpeg')",
        "url('img/puppies4.jpeg')"
    ];

    let count = 0;

    document.getElementById("image").style.backgroundImage = puppies[count];
    document.getElementById("left-btn").addEventListener("click", () => {
        count =
        document.getElementById("image").style.backgroundImage = puppies[count];
    });
})()