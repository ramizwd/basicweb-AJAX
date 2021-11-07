'use strict';

// Async function for fetching shows from TVMaze API.
const fetchShow = async (url) =>{
    const response = await fetch(url);
    return await response.json();
};

// Select elements from HTML.
const form = document.querySelector('#search-form');
const query = document.querySelector('#query');
const target = document.querySelector('#target');

// Get input value and fetch shows on submit
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const url = form.action + '?q=' + query.value;
    const tvShows = await fetchShow(url);
    console.log(tvShows);

    // Select the main element and empty it.
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = "";

    // Get each show.
    tvShows.forEach(shows => {
        // Check for NULL and assign show infos to variables.
        const show = shows.show;
        const name = (show.name !== null) ? show.name : "Title not available.";
        const homePage = (show.officialSite !== null) ? show.officialSite : show.url;
        const imageMed = (show.image !== null) ? show.image.medium : "images/image-err.png";
        const summary =(show.summary !== null) ? show.summary : "No summary available.";
        const genres = (show.genres !== null) && show.genres.length > 0 ? show.genres.join(" | ") 
            : "No genre information available.";

        // Insert HTML elements.
        mainElement.innerHTML +=
        `<article id="main-article">
            <header>
                <h2>${name}</h2>
            </header>
            <figure>
                <img src=${imageMed} alt=${name} ' cover image.'>
            </figure>
            <p class="show-info" >Genres: ${genres}</p>
            <p class="show-info" >Summary: ${summary}</p>
            <p id="home-page" ><a href=${homePage}> Official Site </p>
        </article>`;
    });
});