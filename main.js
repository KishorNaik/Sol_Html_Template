/// <reference path='jquery-3.4.1.min.js'/>

let movies = [{
    name: "Lord of Rings",
    detail: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    name: "Star Wars - IV",
    detail: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
  },
];



$(document).ready(function(){

    // Plain Javascript

    // // Get Template
    let _moviesTemplate=document.querySelector("#movieTemplate");
    // get Template Placeholder
    let _moviesList=document.querySelector("#movieList");
    
    for(let movieData of movies)
    {
      _moviesTemplate.content.querySelector('h3').innerText=movieData.name;
      _moviesTemplate.content.querySelector('p').innerText=movieData.detail;

      let clone = document.importNode(_moviesTemplate.content, true);
      _moviesList.appendChild(clone);
    }

});