'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

if ( a != null && b != null && a != '' && b != '' && a.length < 50) { // если а и б не ноль и не пустая строка и меньше 50

    personalMovieDB.movies[a] = b; // то данные  выводяться  дальше
    
    console.log('done'); // и  в  консоль  тоже

} else { //  но  если  не  так  то
console.log('error');// в  консоль  сообщение  ошибка
i--;// знак  икремента  возвращаем  значение i   на  цикл  назад
}
}








if (personalMovieDB.count < 10) 

{  console.log("Просмотрено довольно мало фильмов");} 


else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) 


{ console.log("Вы классический зритель")};


else if (personalMovieDB.count >= 30) 


{ console.log("Вы киноман")};


else


{ console.log ("Произошла ошибка")};





























{ console.log("Вы классический зритель");}                


console.log(personalMovieDB);














