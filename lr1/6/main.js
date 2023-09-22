let question = prompt("Введіть прізвище та ім'я")
let names = []

while (question !== null) {
    if (question.trim() === '') {
        alert("Ви забули ввести дані!")
    } else {
        names.push(question)
    }
    question = prompt("Введіть прізвище та ім'я")
}

names.forEach(element => {
    document.write(element + "<br>")
});
