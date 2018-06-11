/* ============================================ ; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 11 June 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the Javascript Function properties ;=========================================== */


var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.shelita = "Shelita Soriano";

// function 
function myName() {
    return myName.shelita    
}

// output 
console.log('\n'); 
console.log("Hello " + myName() + "!");



// end program 