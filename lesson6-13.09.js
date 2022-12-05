// В программе объявлена переменная num, которая содержит в себе численные данные. Напишите функцию power(), 
// используя цикл, возведите значение переменной в квадрат 3 раза. 
// Каждый результат сконкатенировать через пробел и выведите в консоль. пример: 
// let num = 2
// power(num)

// Результат:  4 16 256

// Решение 1 (простое, без цикла)

// function power(num){ 
//   let a = num ** 2
//   let b = a ** 2
//   let c = b ** 2
//   console.log(`${a} ${b} ${c}`)
// }

// Решение 2 (с циклом)

// function power(num){
//   let result = ''
//   for(let i = 0; i <= 2; i++){
//     num **= 2
//     result += `${num} `
//   }
//   console.log(result)
// }

// power(2)

// Решение 3 (доработанное, с 2 параметром в качестве аргумента)
// function power(num, props){
//   let result = ''
//   for(let i = 0; i < props; i++){
//     num **= 2
//     result += `${num} `
//   }
//   console.log(result)
// }

// power(2,3)


// В программе задана переменная num с числом. Напишите функцию handler, 
// которая составит таблицу умножения с данным аргументом по следующему примеру:
// handler(5)

// Результат:

// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50

// function handler(num){
//   for (let i = 1; i <= 10; i++){
//     let result = i * num
//     console.log(`${num}*${i}=${result}`)
//   }
// }​
// handler(7)

// Задача isnan заключается в проверке, явлется ли число типом NaN (Не число). 
// Если да - ответ будет true, в противном случае false​
// console.log(isNaN(10)) false, поскольку 10 - это число

// console.log(isNaN(+'10b')) true, поскольку число оказалось NaN​

// Глобальный объект Math
// Работа со округлением:
// Math.ceil(n)    округление числа n вверх 
// Math.floor(n)   округление числа n вниз 
// Math.round(n)   округление по правилам математики 
// если дробна часть < 5 - округление произойдет вниз 
// если дробная часть >= 5 - округление произойде вверх​
// Работа со степенями:
// Math.pow(n,m)      возведение n в степень m
// Math.sqrt(n)       возвращение квадратного корня числа n
// Math.cbrt(n)       возрващение кубического корня числа n
console.log (Math.sqrt(4))

// Работа с знаком:
// Math.abs(n)           возвращение абсолютного значения числа n
// Math.sign(n)          возвращение знака числа (-1,1,0)​
// Math.max(n1,n2,n3...) ищет максимум из переданных n значений
// Math.min(n1,n2,n3...) ищет минимум из переданных n значений

// Math.random()         сформировать рандомное число от 0 до 1 не включительно​
// let a = Math.random()

// console.log(a)​

// Напишите функцию handRandom(), задача которого вернуть 
// рандомное число с диапазоном от 0 до 100 включительно, без дробной части​
// function handRandom(){
//   let result = Math.ceil(Math.random() * 100)
//   return result
// }​
// console.log(handRandom())

// parseInt()
// console.log(parseInt('100'))      100
// console.log(parseInt('50px'))     50
// console.log(parseInt('p50'))      NaN
// console.log(parseInt('10.4mm'))   10
// console.log(parseInt('10,4mm'))   10
// console.log(parseInt('Text'))     NaN

// parseFloat()
// console.log(parseFloat('100'))         100
// console.log(parseFloat('50px'))        50 
// console.log(parseFloat('p50'))         NaN
// console.log(parseFloat('10.4mm'))      10.4  (овтет другой)
// console.log(parseFloat('10,4mm'))      10
// console.log(parseFloat('Text'))        NaN​
// Задача
// Заданы 4 переменные с значениями CSS-свойств. 
// Определите максимальное значение и выведите результат в консоль

// let a = '11.5001px'
// let b = '11.499em'
// let c = '11.49fr'
// let d = '-11.5px'​
// let a1 = parseFloat(a)
// let b1 = parseFloat(b)
// let c1 = parseFloat(c)
// let d1 = parseFloat(d)

// console.log(Math.max(a1,b1,c1,d1))​
