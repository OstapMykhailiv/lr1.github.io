let amount = prompt("Введіть кількість студентів в групі")
let students = []
let t = null

// перевірка на ціле число студентів
if(Number.isInteger(parseFloat(amount))){}
else{
    alert("Введіть ціле число кількості студентів!")
    amount=0
}

for (let i=0; i<amount; i++){
    t = prompt(`Введіть ім'я та прізвище студента №${i+1}`)
    // перевірка на наявність цифр в прізвищі та імені
    if (/\d/.test(t)){
        alert("Введіть ім'я та прізвище без цифр!")
        i-=1
        continue
    }
    // перевірка на наявність пробілів
    if(t.includes(" ")){
        t = t.split(" ")
    }
    else{
        alert("Ви ввели тільки одну частину імені")
        i-=1
        continue
    }
    // перевірка на великі літери
    for (let j=0; j<t.length; j++){
        if(t[j].charAt(0) === t[j].charAt(0).toUpperCase()){
            console.log(t[j].charAt(0), t[j].charAt(0).toUpperCase())
        }
        else {
            alert("Прізвище або ім'я не написані з великої літери")
            i-=1
            break
        }
        if(j === t.length-1){
            students.push(t)
        }
    }
}
// вивід
for (let i=0; i<students.length; i++){
    for(let j=0; j<students[i].length; j++){
        document.write(students[i][j] + " ")
    }
    document.write('<br>')
}