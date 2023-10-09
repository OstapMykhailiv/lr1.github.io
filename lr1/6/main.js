let students = []

while (true) {
    let question = prompt("Введіть прізвище та ім'я");
    if (question === null){
        for (let i=0; i<students.length; i++){
            for(let j=0; j<students[i].length; j++){
                document.write(students[i][j] + " ")
            }
            document.write('<br>')
        }
        break
    }
    // перевірка на наявність цифр в прізвищі та імені
    if (/\d/.test(question)){
        alert("Введіть ім'я та прізвище без цифр!")
        break
        // let question = prompt("Введіть прізвище та ім'я")
    }
    // перевірка на наявність пробілів
    if(question.includes(" ")){
        question = question.split(" ")
    }
    else{
        alert("Ви ввели тільки одну частину імені")
        break
        // let question = prompt("Введіть прізвище та ім'я")
    }
    // перевірка на великі літери
    for (let j=0; j<question.length; j++){
        if(question[j].charAt(0) === question[j].charAt(0).toUpperCase()){
            console.log(question[j].charAt(0), question[j].charAt(0).toUpperCase())
        }
        else {
            alert("Прізвище або ім'я не написані з великої літери")
            break
            // let question = prompt("Введіть прізвище та ім'я")
        }
        if(j === question.length-1){
            students.push(question)
        }
    }
    console.log(students)
}


