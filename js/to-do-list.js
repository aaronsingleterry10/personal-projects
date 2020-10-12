$(document).ready(() => {
    const todoUrl = "http://localhost:3000/todo";
    let myData = [];

    fetch(todoUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                myData.push(data[i]);
            }
            return myData;
        });

    console.log(myData)

    function convertDateToDatestamp(date) {
        date = date.split("-");
        date = date.map(n => {
            return parseInt(n);
        });
        return new Date(date[0], (date[1] - 1), date[2]);
    }

    function showData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                $(data).each(function (index, element) {
                    let taskDate = new Date(element.date);
                    $('#todo').append(`
                        <div id="${element.id}">
                            <h3>${element.task}</h3>
                            <div>${taskDate.toDateString()}</div>
                            <button data-id="${element.id}" data-action="edit">Edit</button>
                            <button data-id="${element.id}" data-action="delete">Delete</button>
                        </div>
                    `);
                });
            });
    }

    function findAll(data) {
        $(data).each(function (index, element) {
            let taskDate = new Date(element.date);
            $('#todo').html(`
                        <div id="${element.id}">
                            <h3>${element.task}</h3>
                            <div>${taskDate.toDateString()}</div>
                            <button data-id="${element.id}" data-action="edit">Edit</button>
                            <button data-id="${element.id}" data-action="delete">Delete</button>
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
            </form>
        `);

        $("#send").click((e) => {
            e.preventDefault();
            console.log(e.target);
            let taskInput = $("#task").val();
            let dateInput = convertDateToDatestamp($("#date").val());
            fetch(todoUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    date: dateInput,
                    task: taskInput
                })
            })
                .then(response => response.json())
                .then(data => {
                    $("#task").val("");
                    $(data).each(function (index, element) {
                        let taskDate = new Date(element.date);
                        $('#todo').append(`
                        <div id="${element.id}">
                            <h3>${element.task}</h3>
                            <div>${taskDate.toDateString()}</div>
                            <button data-id="${element.id}" data-action="edit">Edit</button>
                            <button data-id="${element.id}" data-action="delete">Delete</button>
                        </div>
                    `);
                    });
                });
        });
    }

    function clickedEdit(url, eButton) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let obj = data.filter(n => {
                    return n.id === parseInt(eButton.target.dataset.id);
                });
                console.log(obj)
                let taskDate = new Date(obj[0].date);
                $(`#${obj[0].id}`).html(`
                        <form>
                            <div class="form-group">
                                <label for="edit-task">Task</label>
                                <input type="text" class="form-control" id="edit-task" value="${obj[0].task}">
                                <label for="edit-date">Date (Currently: <span>${taskDate.toDateString()}</span>)</label>
                                <input type="date" class="form-control" id="edit-date" name="edit-date">
                            </div>
                            <button data-id="${obj[0].id}" data-action="submit-changes">Submit Changes</button>
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

    showData(todoUrl);

    $("#create-task").click((e) => {
        createTask();
    });

    $("#todo").click((e) => {
        e.preventDefault();
        let button = e.target.dataset.action
        if (button === "edit") {
            clickedEdit(todoUrl, e)
            // let obj = data.filter(n => {
            //     return n.id === parseInt(e.target.dataset.id);
            // });
            // console.log(obj)
            // let taskDate = new Date(obj[0].date);
            // $(`#${obj[0].id}`).html(`
            //     <form>
            //         <div class="form-group">
            //             <label for="edit-task">Task</label>
            //             <input type="text" class="form-control" id="edit-task" value="${obj[0].task}">
            //             <label for="edit-date">Date (Currently: <span>${taskDate.toDateString()}</span>)</label>
            //             <input type="date" class="form-control" id="edit-date" name="edit-date">
            //         </div>
            //         <button data-id="${obj[0].id}" data-action="submit-changes">Submit Changes</button>
            //     </form>
            // `);
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
    });
});