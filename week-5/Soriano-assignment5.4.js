var header = require('../header.js');

/* ============================================ 
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 24 June 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the ; use of JavaScript types, values,
; and variables in an application. 
;=========================================== */

//map() method

//-- COMPOSER BY RATING --


var famousComposers = [
    {
        firstName: "Ludwig van",
        lastName: "Beethoven",
        genre: "Classical",
        rating: 8
    },
    {
        firstName: "Wolfgang Amadeus",
        lastName: "Mozart",
        genre: "Classical",
        rating: 10
    },
    {
        firstName: "Johann Sebastian",
        lastName: "Bach",
        genre: "Classical",
        rating: 9
    },
    {
        firstName: "Joseph",
        lastName: "Haydn",
        genre: "Classical",
        rating: 6
    },
    {
        firstName: "Franz",
        lastName: "Schubert",
        genre: "Classical",
        rating: 5
    },
];

var composersByRating = famousComposers.map(function(composers) {
   return composers.rating
});
var composersByName = famousComposers.map(function(composer) {
    
    return composer.lastName
});
composersByRating.forEach(function(rating) {console.log("Rating: " + rating)});
composersByName.forEach(function(lastName){console.log("Composer: " + lastName)});


//-- COMPOSER BY RATING --
var composersByGenre = famousComposers.map(function(composers) {
    return composers.genre
 });
 var composersByName = famousComposers.map(function(composer) {
    
    return composer.lastName
 });
 
 composersByRating.forEach(function(genre) {console.log("Genre: " + genre)});
 //composersByGenre.forEach(function(lastName){console.log("Composer: " + lastName)});