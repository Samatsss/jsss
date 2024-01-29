// 1.1
// let num = 3
// alert(num)


//1.2
// let a = 10
// let b = 2
// alert(a + b)
// alert(a - b)
// alert(a * b)
// alert(a / b)


//1.3
// let c = 15
// let d = 2
// result = c + d
// alert(result)


//1.4
// let a = 10
// let b = 2
// let c = 5
// alert(a + b + c)


//1.5
// let a = 17
// let b = 10
// let c
//     c = a - b
// let d = 7
// let result
// result = c + d
// alert(result)


//2.1
// let str
// str = 'Привет,Мир!'
// alert(str)


//2.2
// let str1= 'Привет'
// let str2= 'Мир!'
// alert(str1 + str2)


//2.3
// let name = "%Samat%"
// alert('Привет ' + name + '!')


//2.4
// let age = '%16%'
// alert('Мне ' + age + ' лет!')


//3.1
// let name = prompt('Как тебя зовут?');
// alert(`Ваше имя ${name}`)


//3.2
// let num = prompt('Спрашиваю у вас число');
// alert(`Ваше число в квадрате ${num*num}`)


//4.1
// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);


//4.2
// let num = '12345';
// let product = 1;
// let digits = num.split('');
// for (let i = 0; i < digits.length; i++) {
//   product *= parseInt(digits[i], 10);
// }
// alert('Произведение цифр числа: ' + product);


//5.1
// month = prompt('Сколько месяцев?') // ну месяц примерно 30 дней
// day = prompt('Сколько дней?')
// hour = prompt('Сколько часов?')
// vivod = month*2592000 + day*86400 + hour*3600
// alert(`Вот столько секунд ${vivod}`)


// 5.2
// hour = prompt('Укажите час:')
// minute = prompt('Укажите минуты:')
// second = prompt('Укажите секунды:')
// alert(`Вы удивитесь, но ваше время ${hour + ':' + minute + ':' + second}`)


//5.3
// let a = 56
// alert(a*a)




// вторая презентация по js

//1.1
// let a = prompt('Введите число:')
// if (a == 10) {
//     alert('Верно!')
// } else {
//     alert('Неверно!')
// }


//1.2
// let min=+prompt('Введите число от 0 до 59');
//       if (min >= 0 & min <= 14) {
//           alert("Первая");
//      }
//       else if (min >= 15 & min <= 30) {
//           alert("Вторая");
//      }
//      else if (min >= 31 & min <= 45) {
//          alert("Третья");
//      }
//      else if (min >= 46 & min <= 59) {
//          alert("Четвертая");
//      }



//1.3
// let lang = prompt('введите `ru` или `en` другое значение будет недопустимо');
// let arr;
//     if (lang == 'ru') {
// arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
//     }
//     if (lang == 'en') {
// arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     }
// alert(arr);


//2.1

// let num = 2;
// let result;
// switch (num) {
//   case 1: result = 'зима'; break;
//   case 2: result = 'весна'; break;
//   case 3: result = 'лето'; break;
//   case 4: result = 'осень'; break;
//   default: result = 'некорректное значение';
// }
// alert(result);


//3.1

// let day = 17;
// let decade;
// if (day >= 1 & day <= 10) {
//   decade = 'первую';
// } else if (day >= 11 & day <= 20) {
//   decade = 'вторую';
// } else if (day >= 21 & day <= 31) {
//   decade = 'третью';
// } else {
//   decade = 'некорректное значение';
// }
// alert(`Число ${day} попадает в ${decade} декаду месяца.`);


//3.2
// let month = 7;
// let season;
// if (month >= 1 & month <= 2 || month === 12) {
//   season = 'зиму';
// } else if (month >= 3 & month <= 5) {
//   season = 'весну';
// } else if (month >= 6 & month <= 8) {
//   season = 'лето';
// } else if (month >= 9 & month <= 11) {
//   season = 'осень';
// } else {
//   season = 'некорректное значение';
// }
// alert(`Месяц номер ${month} попадает в ${season}.`);
//
//3.3
// let str = 'abcde';
// if (str.charAt(0) === 'a') {
//   alert('да');
// } else {
//   alert('нет');
// }
//
//3.4
// let str = '12345';
// if (/^[1-3]/.test(str)) {
//   alert('да');
// } else {
//   alert('нет');
// }


//3.5
// let str = '123';
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]));

//3.6
// let str = prompt();
// if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
// alert('да');
// } else {
// alert('нет');
// }



