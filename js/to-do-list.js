$(document).ready(() => {
    const myList = "json/list.json";

    function showData() {
        fetch("http://localhost:3000/todo")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                $(data).each(function (index, element) {
                    $('#todo').append(`<h1>${element.title}</h1>`);
                    $('#todo').append(`<p>${element.description}</p>`);
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
        // let userInput = {
        //     title: titleInput,
        //     description: descriptionInput
        // };
        // let options = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         title: titleInput,
        //         description: descriptionInput
        //     })
        // };
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

    // let newPost = {title: "Post Title", description: "Post Description"};
    // const options = {
    //     method: "POST",
    //     body: JSON.stringify(newPost),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // };
    // $("#send").click(e => {
    //     e.preventDefault();
    //     fetch(myList, options)
    // .then(response => response.json())
    // .then(data => {
    //     $(data).each(function (index, element) {
    //         $('#todo').append(`<h1>${element.title}</h1>`);
    //         $('#todo').append(`<p>${element.description}</p>`);
    //     });
    // });
    // });
    // $.ajax("data/list.json").done(function (data) {
    //     let myData = JSON.stringify( { title: "my third title", description: "my third description"});
    //     data.push(myData);
    // });
    // $.ajax("data/list.json").done(function (data) {
    //    console.log(data);
    //    $(data).each(function (index, element) {
    //        $('#todo').append(`<h1>${element.title}</h1>`);
    //        $('#todo').append(`<p>${element.description}</p>`)
    //    });
    // });

});