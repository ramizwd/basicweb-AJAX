'use strict';

const fetchShow = async (url) =>{
    const response = await fetch(url);
    return await response.json();
};

const form = document.querySelector('#search-form');
const query = document.querySelector('#query');
const target = document.querySelector('#target');

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const url = form.action + '?q=' + query.value;
    const tvShows = await fetchShow(url);
    console.log(tvShows);

    // tvShows[0].show.name
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = "";
    
    for (let i = 0; i < tvShows.length; i++){

        mainElement.innerHTML +=
        `<article>
            <header>
                <h2>${tvShows[i].show.name}</h2>
            </header>
            <figure>
                <img src=${tvShows[i].show.image.medium} alt=${tvShows[i].show.name} 'image'>
                <figcaption></figcaption>
            </figure>
            <p>${tvShows[i].show.summary}</p>
        </article>`;
    }

});


/*
// Put code of task D here
"use strict";
for (let i = 0; i < picArray.length; i++){
    const mainElement = document.querySelector("main");
    mainElement.innerHTML += 
    `<article>
        <header>
            <h2>${picArray[i].title}</h2>
        </header>
        <figure>
            <img src=${picArray[i].filename} alt="title">
            <figcaption>${picArray[i].caption}</figcaption>
        </figure>
        <p>${picArray[i].description}</p>
    </article>`;
} */