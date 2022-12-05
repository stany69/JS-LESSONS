
class Users {
    //     constructor(name,salary){
    //         this.name = name
    //         this.salary = salary
    //         this.exp = 2 
    //     }
    //     calc() {
    //         console.log(this.salary * this.exp * 12)
    //     }
    //     sayHi() {
    //         console.log('Юзер '+ this.name+' говорит привет!')
    //     }
    //     static method() {
    //         return console.log('Статический метод')
    //     }
    //     static prop = 'Статическое свойство'
    // }
    
    // let petya = new Users('Petya',1000)
    
    // petya.salary = 5000
    
    // console.log(petya.prop, Users.prop) -- undefined  'Статическое свойство'
    
    // Геттер, Сеттер
    
    // let obj = {
    //     get propName() {...},
    //     set propName() {....}
    // }
    
    // Метод get задает значение для сво-ва объекта 
    
    // Пример 1
    // let pet = {
    //     name: 'Шарик',
    //     breed: 'Пудель',
    //     get nameBreed() {return `${this.name}, ${this.breed}`}
    // }
    
    // console.log(pet)
    
    // Пример 2 
    // let obj = {
    //     array: ['Раз', "Два", "Три"],
    //     get lastValue() {return this.array[this.array.length-1]}
    // }
    
    // obj.lastValue = 'Тест'
    
    // console.log(obj.lastValue)
    
    //  Метод set позволяет считать значение (должен передавать один аргумент)
    // let obj = {
    //     array: ['Раз', "Два", "Три"],
    //     get lastValue() {return this.array[this.array.length-1]},
    //     set setArray(value) {return this.array = value}
    // }
    
    // console.log(obj.lastValue)
    
    // obj.setArray = [1,2,3,4,5]
    
    // console.log(obj.lastValue)
    
    // ------------------
    // Флаги и дескрипторы свойств
    
    // let obj = {
    //     name: 'Tigran',
    //     age: 29,
    //     salary: 1000
    // }
    
    // Object.getOwnPropertyDescriptor() позволяет получить список дополнительных парамтеров свойств
    
    // let result = Object.getOwnPropertyDescriptor(obj, 'name')
    // console.log(result)
    
    // value - значение
    // writable - право на изменение свойства
    // enumerable - право на итерацию в цикле
    // configurable - право на удаление, изменение значения флагов дескриптора
    
    // -------
    // writable
    
    // Object.defineProperty(obj, 'name', {writable: false})
    // obj.name = 'Alex'        - не перезапишется
    // console.log(obj)
    
    // -------
    // enumerable
    
    // Object.defineProperty(obj, 'name', {enumerable: false})
    // for (let i in obj){ 
    //     console.log(i,obj[i])     -- цикл не покажет свойство name
    // }
    // console.log(obj.name)    -- если явно указать - добраться до значения можно
    // console.log(obj)         -- в ответе данного сво-ва не будет
    
    // -------
    // configurable
    
    // Object.defineProperty(obj, 'name', {configurable: false})    -- можем выключить
    // Object.defineProperty(obj, 'name', {configurable: true})     -- а обратно уже нет (будет ошибка)
    // delete obj.name                                              -- удаление не произойдет
    // console.log(obj)
    
    
    
    // -------------------------
    // Наследование
    
    class Drive {
        constructor(model){
            this.speed = 0
            this.model = model
        }
        driving(speed) {
            this.speed = speed
            console.log(`${this.model} едет со скоростью ${this.speed} км/ч`)
        }
        parking() {
            this.speed = 0
            console.log(`${this.model} припоркавался`)
        }
    }
    
    // let tesla = new Drive('Tesla')
    // tesla.driving(60)
    // console.log(tesla)
    
    
    // Наследование происходит используя оператор extends с именем старого класса drive.
    // Для того, чтобы свойства с контекстом this рпавильно наследовались, необходимо указать метод super() внутри конструктора
    
    // class Car extends Drive{
    //     constructor (model, productYear){
    //         super()
    //         this.model = model
    //         this.productYear = productYear
    //     }
    //     autoParking() {
    //         this.speed = 0.5
    //         console.log(`${this.model} включил режим автопарковки`)
    //     }
    // }
    
    // let tesla = new Car('Tesla', 2020)
    // tesla.driving(60)
    // tesla.autoParking()
    // console.log(tesla)