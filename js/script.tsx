let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '123');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answers = () => {
    let answer1 = prompt("Один из последних просмотренных фильмов?",'');
    let answer2 = prompt("На сколько оцените его?",'');
    answer1 ? personalMovieDB.movies[answer1] = answer2 :{};
};

answers();
answers();

console.log(personalMovieDB);
