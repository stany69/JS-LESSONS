
// В программе объявлена переменная order, которая хранит объект.  
// Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа  
// totalPrice объекта orders в виде массива. Результат выведите в консоль. Пример значений переменных:


// Пример результата: 
// [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]

   let order = { 
       productName: "Велосипед", 
       costomerName: "Саша", 
       salesName: "Петя", 
       totalPrice: 15000 
      } 
     

    let descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice')
   
    console.log(Object.entries(descriptor))
        



// В программе задан объект employees, который содержит ряд свойств и методов. 
// Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. 
// Имена методов добавляться не должны. Пример значений переменных:
// let employees = { 
// firstName: "Петя", 
// lastName: "Иванов", 
// ratePerDay: 2500, 
// workingDays: 5 }
//getSalary() { console.log(employees.ratePerDay * employees.workingDays )} } 



// Пример результата: firstName, lastName, ratePerDay, workingDays




// В программе объявлены переменные name и phone, которые хранят строки. 
// В name указано название заведения, а в phone — его номер телефона. 
// Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, 
// добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки.
//  Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true.
//   Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения 
//   переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName. 
// Пример значений переменных: 
// let name = "Pizza" 



// class Delivery {
//     constructor(name, phone){
//         this.name = name
//         this.phone = phone
//     }
//     get validPhone() {
//         return (this.phone[0] != '+') ? false : true
//     }
//     set changePhome(phone){
//         return this.phone = phone
//     }
// }

// let deliveryName = new Delivery('Tigran', '+9327409890324')

// deliveryName.changePhome = '+9083485093578'
// console.log(deliveryName.validPhone)
