var header = require('../header.js');

/* ============================================ 
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 27 July 2017
; Modified By: Shelita Soriano
; Description: This program demonstrates the ; use of JavaScript types, values, and
; and variables in an application. 
;=========================================== */

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

var fruits = ["strawberry", "mango", "cherry", "grapes", "watermelon"]

// function
function getFruit(fruity) {
    for (var i = 0; i < fruity.length; i++) {
        console.log(fruity[i]);
    }
}


// Output from the getFruit() function
getFruit(fruits)


// end program