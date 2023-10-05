var number = prompt("Введіть цифру місяця: ");

if (number >= 1 && number <= 2 || number === 12) {
  alert("Зима");
} else if (number >= 3 && number <= 5) {
  alert("Весна");
} else if (number >= 6 && number <= 8) {
  alert("Літо");
} else if (number >= 9 && number <= 11) {
  alert("Осінь");
} else {
  alert("Неравильне число місяця. Введіть число від 1 до 12.");
}