var header = require('../header.js');


/* ============================================ 
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 24 June 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the ; use of JavaScript types, values, and
; and variables in an application. 
;=========================================== 
*/

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

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

    famousComposers.forEach(function(composer) {
        console.log(
            "Last Name: " + composer.lastName +", Genre: " + composer.genre + ", Rating: " + composer.rating
        );
    })






// end program