//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [13,54,true,'asd', 'qwerty', false, 'Okten', 'Artem', 111, 222]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const arr1 = {
    title:'arr1 title',
    pageCount:'arr1 pageCount',
    genre: 'arr1 genre'
}

const arr2 = {
    title:'arr2 title',
    pageCount:'arr2 pageCount',
    genre: 'arr2 genre'
}

const arr3 = {
    title:'arr3 title',
    pageCount:'arr3 pageCount',
    genre: 'arr3 genre'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre,
// authors. Поле "автори" - масив. Кожен автор має поля name,age



const book1 = {
    title:'book1 title',
    pageCount:'book1 pageCount',
    genre: 'book1 genre',
    authors: [{name: 'Anna', age: 21}]
};

const book2 = {
    title:'book2 title',
    pageCount:'book2 pageCount',
    genre: 'book2 genre',
    authors: [{name: 'Anna', age: 21}]
};

const book3 = {
    title:'book3 title',
    pageCount:'book3 pageCount',
    genre: 'book3 genre	',
    authors: [{name: 'Anna', age: 21}]
};




// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [{
    user0: {name: 123, username: null, password: 100},
    user1: {name: null, username: null , password: 111},
    user2: {name: null, username: null , password: 222},
    user3: {name: null, username: null , password: 333},
    user4: {name: null, username: null , password: 444},
    user5: {name: null, username: null , password: 555},
    user6: {name: null, username: null , password: 666},
    user7: {name: null, username: null , password: 777},
    user8: {name: null, username: null , password: 888},
    user9: {name: null, username: null , password: 999}
}];

console.log(users[0].user0.password)
console.log(users[1].user1.password)
console.log(users[2].user2.password)
console.log(users[3].user3.password)
console.log(users[4].user4.password)
console.log(users[5].user5.password)
console.log(users[6].user6.password)
console.log(users[7].user7.password)
console.log(users[8].user8.password)
console.log(users[9].user9.password)





