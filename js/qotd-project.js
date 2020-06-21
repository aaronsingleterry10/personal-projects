"use strict";

(function () {

    document.getElementById("q-generator").addEventListener("click", () => {
        fetch("http://quotes.stormconsultancy.co.uk/random.json").then(response => response.json()).then(quote => {
            document.getElementById("quote").innerText = quote.quote;
            document.getElementById("author").innerText = "-" + quote.author;
        });
    });

})();