/* Задания на 1 урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на 2 урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded',()=>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        background = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('form.add'),
        addInput = formAdd.querySelector('.adding__input'),
        checkbox = formAdd.querySelector('[type="checkbox"]');


    //1.1
    const deleteAdv = (adv) => {
        adv.forEach(item => {
            item.remove();
        });
    }
    deleteAdv(adv)

    
    const makeChanges = () =>{
        //1.2
        genre.textContent = 'Драма';

        //1.3
        background.style.backgroundImage = ('url("img/bg.jpg")');
    }

    makeChanges();

    //1.4,5
    const sortDB = (ArrayDB) => {
        ArrayDB.sort();
    }

    const createMovieList = (filmsDB, parent) => {
        parent.innerHTML = '';
        sortDB(filmsDB)
        filmsDB.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1}: ${film}
        <div class="delete"></div>
    </li>
    `
        })

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click',()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(filmsDB, parent)
            })
        })
    }

    createMovieList(movieDB.movies, movieList)

    

    //2
    formAdd.addEventListener('submit',(event) =>{
        event.preventDefault();

        let newFilm = addInput.value;
        const goodFilm = checkbox.checked;

        if (newFilm){
            if (goodFilm) {
                console.log('Добавился любимый фильм: ', newFilm)
            }

            if(newFilm.length>21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            
            movieDB.movies.push(newFilm);
            sortDB(movieDB.movies);

            createMovieList(movieDB.movies, movieList)
        }

       
        event.target.reset();   
    })
})