$(document).ready(() => {
    const myList = "json/list.json";

    function showData() {
        fetch("http://localhost:3000/todo")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                $(data).each(function (index, element) {
                    $('#todo').append(`
                        <h1>${element.title}</h1>
                        <p>${element.description}</p>
                        <input type="submit" id="${element.id}" value="edit">
                    `);
                    // $('#todo').append(`<p>${element.description}</p>`);
                });
            });
    }

    showData();

    $("#send").click((e) => {
        e.preventDefault();
        console.log(e.target)
        let titleInput = $("#title").val();
        let descriptionInput = $("#description").val();
        console.log(titleInput, descriptionInput);
        fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: titleInput,
                description: descriptionInput
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                $(data).each(function (index, element) {
                    $('#todo').append(`<h1>${element.title}</h1>`);
                    $('#todo').append(`<p>${element.description}</p>`);
                });
            });

    });
});