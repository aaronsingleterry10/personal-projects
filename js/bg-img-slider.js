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
        if (count <= 0) {
            count = 4;
        } else {
            count -= 1;
        }
        document.getElementById("image").style.backgroundImage = puppies[count];
    });
    document.getElementById("right-btn").addEventListener("click", () => {
        if (count >= 4) {
            count = 0;
        } else {
            count += 1;

        }
        document.getElementById("image").style.backgroundImage = puppies[count];
    });
})()