
// First level: Необходимо реализовать функционал по добавлению и удалению пользователей.
// Задан массив users, элементы которого передают свойства объекта
// Пример:
// let users = [
// {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
// {id: 1, name: 'Willyam', lastname: 'Maxwell', age: 31},
// ]


// Реализуйте следующие функции:


// 1) Добавление пользователей в массив, используя аргументы (id,name,lastname,age)
// 2) Изменение данных пользователей. Функция должна также передавать все аргументы 
//(Подсказка: реализовать поиск через id)
// 3) Удаление пользователей. Функция должна получить только id. В функции необходимо 
//предусмотреть случай, когда переданный аргумент не будет найден среди users.

let users = [
     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 31},
        ]

        let newUser = {id:3,name:'Robert',lastName:'De Niro',age:79}


        function addUser(arr,val){
            let length = arr.length;
            arr[length]=val;

            return arr
        }
        console.log(addUser(users,newUser))

// Продемонстрируйте функционал на примере добавления, изменения и удаления данных 
//пользователей вызывая функции с произвольными данными


// (Если есть вопросы по заданию - обязательно пишите в чат)


// Second level: (Сложный вариант)
// Предусмотрите процесс, который будет автоматически заполнять атрибут id, не используя 
//его в качестве аргумента при добавлении очередного пользователя.