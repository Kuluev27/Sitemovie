

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${film} ${i + 1}
          <div class="delete"></div>
    </li>
    
    `;

});

const promo = document.querySelector('.promo__menu');


promo.sort();

promo.forEach(() => {
   console.log(promo);  
});







    







