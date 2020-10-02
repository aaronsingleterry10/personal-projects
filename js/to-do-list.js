$(document).ready(() => {
    const url = "http://localhost:3000/todo";

    function showData() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let obj = data.filter(n => {
                    return n.id === 3;
                });
                console.log(obj);
                $(data).each(function (index, element) {
                    $('#todo').append(`
                        <div id="${element.id}">
                            <h3>${element.title}</h3>
                            <p>${element.description}</p>
                            <button data-id="${element.id}" data-action="edit">Edit</button>
                            <button data-id="${element.id}" data-action="delete">Delete</button>
                        </div>
                    `);
                });
            });
    }

    showData();

    $("#todo").click((e) => {
        e.preventDefault();
        let button = e.target.dataset.action
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (button === "edit") {
                    let obj = data.filter(n => {
                        return n.id === parseInt(e.target.dataset.id);
                    });
                    $(`#${obj[0].id}`).html(`
                        <div class="form-group">
                            <label for="edit-title">Title:</label>
                            <input type="text" class="form-control" id="edit-title" value="${obj[0].title}">
                        </div>
                        <div class="form-group">
                            <label for="edit-description">Description:</label>
                            <input type="text" class="form-control" id="edit-description" value="${obj[0].description}">
                        </div>
                        <button data-id="${obj[0].id}" data-action="submit-changes">Submit Changes</button>
                    `);
                }
                if (button === "delete") {
                    let obj = data.filter(n => {
                        return n.id === parseInt(e.target.dataset.id);
                    });
                }
                if (button === "submit-changes") {
                    console.log("you've clicked Submit Changes");
                }
            });
    });
});