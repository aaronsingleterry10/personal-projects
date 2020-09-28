$(document).ready(() => {
    $.ajax('data/todo.json').done(function (data) {
       console.log(data);
       $(data).each(function (index, element) {
           $('#todo').append(`<h1>${element.title}</h1>`);
           $('#todo').append(`<p>${element.description}</p>`)
       });
    });
});