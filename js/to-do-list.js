$(document).ready(() => {
    const todoUrl = "http://localhost:3000/todo";

    function returnDateString(date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return "" + year + "-" + month + "-" + day;
    }

    function convertDateToDatestamp(date) {
        date = date.split("-");
        date = date.map(n => {
            return parseInt(n);
        });
        return new Date(date[0], (date[1] - 1), date[2]);
    }

    // This function fetches the list.json data
    function showData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.sort(sortTasks);
                findAll(data);
            });
    }

    // This function displace data onto the page
    function findAll(data) {
        $('#todo').html("");
        $(data).each(function (index, element) {
            let taskDate = new Date(element.date);
            let completed = "";
            if (element.isComplete === true) {
                completed = `<span class="badge badge-success ml-2">&check;</span>`
            }
            $('#todo').append(`
                        <div id="${element.id}" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                            <div class="card-header">${taskDate.toDateString()}</div>
                            <div class="card-body">
                                <div class="title card-title">
                                    <h5>${element.task}</h5>
                                    ${completed}
                                </div>
                                <button data-id="${element.id}" data-action="edit" class="btn btn-outline-info my-2 my-sm-0">Edit</button>
                                <button data-id="${element.id}" data-action="delete" class="btn btn-outline-info my-2 my-sm-0">Delete</button>
                                <button data-id="${element.id}" data-action="complete" class="btn btn-outline-info my-2 my-sm-0">Complete</button>
                            </div>
                        </div>
                    `);
        });
    }

    function createTask() {
        $("#task-form").html(`
            <h3>Add a new To Do</h3>
            <form>
                <div class="form-group">
                    <label for="task">Task</label>
                    <input type="text" class="form-control" id="task" name="task">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" name="date">
                </div>
                <input type="submit" value="Submit" id="send">
                <button id="cancel">Cancel</button>
            </form>
        `);

        $("#send").click((e) => {
            e.preventDefault();
            let taskInput = $("#task").val();
            let dateInput = convertDateToDatestamp($("#date").val());
            fetch(todoUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    date: dateInput,
                    task: taskInput,
                    isComplete: false
                })
            })
                .then(response => response.json());
            showData(todoUrl);
            $("#task-form").html("");
        });

        $("#cancel").click(e => {
            e.preventDefault();
            console.log("hit cancel")
            $("#task-form").html("");
        });
    }

    $("#create-task").click((e) => {
        e.preventDefault();
        createTask();
    });

    function clickedEdit(url, eButton) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let obj = data.filter(n => {
                    return n.id === parseInt(eButton.target.dataset.id);
                });
                let taskDate = new Date(obj[0].date);
                $(`#${obj[0].id}`).html(`
                        <form>
                            <div class="form-group">
                                <label for="edit-task">Task</label>
                                <input type="text" class="form-control" id="edit-task" value="${obj[0].task}">
                                <label for="edit-date">Date</label>
                                <input type="date" class="form-control" id="edit-date" name="edit-date" value="${returnDateString(taskDate)}">
                            </div>
                            <button data-id="${obj[0].id}" data-action="submit-changes">Submit Changes</button>
                            <button data-id="${obj[0].id}" data-action="cancel">Cancel</button>
                        </form>
                    `);
            })
    }

    function editData(url, task, date, eButton) {
        fetch(`${url}/${eButton.target.dataset.id}`, {
            method: "PUT",
            body: JSON.stringify({
                task: task,
                date: date
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
    }

    function deleteData(url, eButton) {
        fetch(`${url}/${eButton.target.dataset.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

    function completeTask(url, eButton) {
        fetch(`${url}/${eButton.target.dataset.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                isComplete: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
    }

    function sortTasks(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    showData(todoUrl);

    $("#todo").click((e) => {
        let button = e.target.dataset.action
        if (button === "edit") {
            e.preventDefault();
            clickedEdit(todoUrl, e)
        }
        if (button === "delete") {
            deleteData(todoUrl, e);
            $("#todo").html("");
            showData(todoUrl);
        }
        if (button === "submit-changes") {
            let task = $("#edit-task").val();
            let taskDate = convertDateToDatestamp($("#edit-date").val());
            editData(todoUrl, task, taskDate, e);
            $("#todo").html("");
            showData(todoUrl);
        }
        if (button === "cancel") {
            e.preventDefault();
            $("#todo").html("");
            showData(todoUrl);
        }
        if (button === "complete") {
            e.preventDefault();
            completeTask(todoUrl, e);
            $("#todo").html("");
            showData(todoUrl);
        }
    });

    $("#search-btn").click((e) => {
        e.preventDefault();
        fetch(todoUrl)
            .then(response => response.json())
            .then(data => {
                let searchedTask = $("#search").val();
                let tasks = [];
                $(data).each((index, task) => {
                    if (task.task.toLowerCase().indexOf(searchedTask) >= 0) {
                        tasks.push(task);
                    }
                });
                findAll(tasks);
            });
    });
});