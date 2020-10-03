$(document).ready(() => {
    const todoUrl = "http://localhost:3000/todo";

    function showData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
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

    function editData(url, title, description, id) {
        fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
    }

    function deleteData(url, id) {
        fetch(`${url}/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

    showData(todoUrl);

    $("#send").click((e) => {
        e.preventDefault();
        let titleInput = $("#title").val();
        let descriptionInput = $("#description").val();
        fetch(todoUrl, {
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
                $("#title").val("");
                $("#description").val("");
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
    });

    $("#todo").click((e) => {
        e.preventDefault();
        let button = e.target.dataset.action
        fetch(todoUrl)
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
                    deleteData(todoUrl, obj[0].id);
                    $("#todo").html("");
                    showData(todoUrl);
                }
                if (button === "submit-changes") {
                    let obj = data.filter(n => {
                        return n.id === parseInt(e.target.dataset.id);
                    });
                    let title = $("#edit-title").val();
                    let description = $("#edit-description").val();
                    editData(todoUrl, title, description, obj[0].id);
                    $("#todo").html("");
                    showData(todoUrl);
                }
            });
    });
});