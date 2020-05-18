var table = document.querySelector("table");

table.addEventListener("dblclick", function (event) {
    var result = confirm("Tem certeza que deseja remover o paciente?");
    if(result){
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 1000);
    }
});