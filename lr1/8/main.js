var button = document.getElementById("button")
var checkboxes = document.getElementsByClassName("chkb");
var input = document.getElementById("input")

button.addEventListener("click", function(){
    alert("Дякую за участь в опитуванні")
})

input.addEventListener("click", function(){
    console.log("Введіть сюди своє ім'я")
})

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", checkboxLog);
}

function checkboxLog(event) {
    if (event.target.checked && event.target.value === "chocolate") {
        console.log("Ви обрали шоколад");
    }
    if (event.target.checked && event.target.value === "icecream") {
        console.log("Ви обрали морозиво");
    }
}
