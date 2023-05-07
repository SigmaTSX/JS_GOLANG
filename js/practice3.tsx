const practice3 = () => {
    let numberOfFilms;
    function start(){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

        while (numberOfFilms == '' || numberOfFilms == null|| isNaN(numberOfFilms)){
            numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    }
    start();

    const personalMovieDB = {
        count: numberOfFilms ? numberOfFilms : 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    const answers = () => {
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

    };
    answers();

    
    const watchFilmLevel = () =>{
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классичческий зритель")
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман")
        } else {
            console.log("Произошла ошибка")
        }
    }
    watchFilmLevel();

}
practice3();