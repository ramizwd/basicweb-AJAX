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
});