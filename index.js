function _addItemToTheList(itemToAdd) {
    $("#lista").append("<li>" +
        "<p>"+ itemToAdd +"</p>" +
        "<div class='Buttons'>" +
        "<button id='botonListo'>Check</button>" +
        "<button id='botonBorrar'>Delete</button>" +
        "</div>" +
        "</li>");
}

$("#item").submit( function (event) {
    event.preventDefault();
    let item = event.target[0].value;
    if(item !== "") {
        _addItemToTheList( item);
    } else {
        alert("Porfavor ingresa un elemento");
    }
});

$("#lista").on('click', "li", function (event) {
    if(event.target.id === "botonListo") {

        if(event.currentTarget.firstChild.classList.length === 0) {
            event.currentTarget.firstChild.classList.add("line");
        } else {
            event.currentTarget.firstChild.classList.remove("line");
        }
    } else if (event.target.id === "botonBorrar") {
        event.currentTarget.remove();
    }
});