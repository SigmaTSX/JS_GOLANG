/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const practice4 = () => {
    
    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function start() {
            this.count = prompt("Сколько фильмов вы уже посмотрели?", '');
            while (this.count == '' || this.count == null || isNaN(this.count)) {
                this.count = prompt("Сколько фильмов вы уже посмотрели?", '');
            }
        },
        answers : () => {
            for (let i = 0; i < 2; i++) {
                let answer1 = prompt("Один из последних просмотренных фильмов?", '');
                let answer2 = prompt("На сколько оцените его?", '');
                if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
                    answer1 ? personalMovieDB.movies[answer1] = answer2 : {};
                    console.log('done');
                } else {
                    console.log('error');
                    i--;
                }
            }
        },
        watchFilmLevel: () => {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов")
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классичческий зритель")
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман")
            } else {
                console.log("Произошла ошибка")
            }
        },
        showMyDB: (privat) => {
            !privat ? console.log('Object: ', personalMovieDB) : null
        },
        writeYourGenres: () =>{
            for (let i = 0; i < 3; i++) {
                let answer1 = prompt(`Ващ любимый жанр под номером ${personalMovieDB.genres.length + 1}`)
                if(answer1 === ''|| answer1==null){
                    console.log('Вы ввели некорректные даннные или не ввели их вовсе')
                    i--;
                } else {
                    //@ts-ignore
                    personalMovieDB.genres[i] = answer1;
                }
                
                
            }
            personalMovieDB.genres.forEach((item,i,arr) =>{
                console.log(`Любимый жанр ${i+1} - это ${item}`)
            })
        },
        toggleVisibleMyDB: (object) =>{
            object.privat ? object.privat = false : object.privat = true
        }
    };
    personalMovieDB.start();
    personalMovieDB.answers();
    personalMovieDB.watchFilmLevel();
    personalMovieDB.showMyDB(personalMovieDB.privat)
    personalMovieDB.writeYourGenres();
    personalMovieDB.toggleVisibleMyDB(personalMovieDB)

}
practice4();