
// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

function checkDate(){
    let currentDate = new Date()
    let endOfMonth = new Date(2022,10,1)
    let result = (endOfMonth.getTime() - currentDate.getTime())
    let oneDay = 1000*60*60*24
    console.log(Math.round(result/oneDay))
}

checkDate()



// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, день)

let toDayIs = new Date() 
let n = 5 - (toDayIs.getDay())
function isItFridayToday(){
    if(toDayIs.getDay() == 5){
        console.log('Today is Friday')
    }else if(toDayIs.getDay() == 6){
        console.log('Yesterday was Friday')
    }else if(toDayIs.getDay() == 4){
        console.log('Tomorrow is Friday')
    }else console.log('Friday will be in ' +n +'day')
}

isItFridayToday()



// Задача 1
// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:

// let arrays = [
//     '89840959944 exampleonemain@mail.ru', 
//     '+79840959933 forreason@yandex.net', 
//     'somemail@mail.ru', 
//     '89840959900 example@gmil.ru', 
//     '+79840959911', 
//     'grandthere@mail.ru', 
//     'jetpackfor@gmail.ru', 
//     '89840959922 some@yandex.com', 
// ]

// Результат: 
// ['89840959944','+79840959933','89840959900','+79840959911','89840959922']
// ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']