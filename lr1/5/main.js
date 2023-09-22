let amount = prompt("Введіть кількість студентів в групі")
let students = []
for (i=0; i<amount; i++){
    students.push(prompt(`Введіть ім'я та прізвище студента №${i+1}`))
}
for (i=0; i<students.length; i++){
    document.write(students[i] + '<br>')
}