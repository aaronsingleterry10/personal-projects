$(document).ready(() => {
    const todoUrl = "http://localhost:3000/todo";

    function showData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                $(data).each(function (index, element) {
                    $('#todo').append(`
                        <div id="${element.id}">
                            <h3>${element.task}</h3>
                            <button data-id="${element.id}" data-action="edit">Edit</button>
                            <button data-id="${element.id}" data-action="delete">Delete</button>
                        </div>
                    `);
                });
            });
    }

    function createTask() {
        $("#task-form").html(`
            <h3>Add a new To Do</h3>
            <form>
                <div class="form-group">
                    <label for="task">Task</label>
                    <input type="text" class="form-control" id="task" name="task">
                </div>
                <input type="submit" value="Submit" id="send">
            </form>
        `);

        $("#send").click((e) => {
            e.preventDefault();
            console.log(e.target);
            let taskInput = $("#task").val();
            fetch(todoUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    task: taskInput,
                })
            })
                .then(response => response.json())
                .then(data => {
                    $("#task").val("");
                    $(data).each(function (index, element) {
                        $('#todo').append(`
                        <div id="${element.id}">
                            <h3>${element.task}</h3>
                            <button data-id="${element.id}" data-action="edit">Edit</button>
                            <button data-id="${element.id}" data-action="delete">Delete</button>
                        </div>
                    `);
                    });
                });
        });
    }

    function editData(url, task, id) {
        fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                task: task,
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

    $("#create-task").click((e) => {
        // e.preventDefault()
        createTask();
    });

    // $("#send").click((e) => {
    //     e.preventDefault();
    //     console.log(e.target);
    //     let titleInput = $("#title").val();
    //     let descriptionInput = $("#description").val();
    //     console.log(titleInput, descriptionInput)
    //     fetch(todoUrl, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json; charset=UTF-8"
    //         },
    //         body: JSON.stringify({
    //             title: titleInput,
    //             description: descriptionInput
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             $("#title").val("");
    //             $("#description").val("");
    //             $(data).each(function (index, element) {
    //                 $('#todo').append(`
    //                     <div id="${element.id}">
    //                         <h3>${element.title}</h3>
    //                         <p>${element.description}</p>
    //                         <button data-id="${element.id}" data-action="edit">Edit</button>
    //                         <button data-id="${element.id}" data-action="delete">Delete</button>
    //                     </div>
    //                 `);
    //             });
    //         });
    // });

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
                            <label for="edit-task">Task:</label>
                            <input type="text" class="form-control" id="edit-task" value="${obj[0].task}">
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
                    let task = $("#edit-task").val();
                    editData(todoUrl, task, obj[0].id);
                    $("#todo").html("");
                    showData(todoUrl);
                }
            });
    });
});