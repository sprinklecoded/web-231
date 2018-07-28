

/* ============================================ 
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 25 July 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the ; use of JavaScript types, values, and
; and variables in an application. 
;=========================================== */

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

//variables
var red = "Truck";
var blue = "Car";
var bicycle = "Bike"
var trike = "Bike"
var tres = "Three"
var quatro = "Four"

// functions 
function match(param1, param2) {
    if (param1 === param2)
        return true
    else
        return false
} 




function logMismatch(param1, param2) {
    console.log(param1 + " and " + param2 + " do not match!")
}


function logMatch(param1, param2) {
    console.log(param1 + " and " + param2 + " do match!")
}


// six (6) test variables 


// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(red, blue)) {
    logMatch(red, blue);
} else {
    logMismatch(red, blue);
}

if (match(quatro, tres)) {
    logMatch(quatro, tres);
} else {
    logMismatch(quatro, tres);
}

if (match(bicycle, trike)) {
    logMatch(bicycle, trike);
} else {
    logMismatch(bicycle, trike);
}

// end program 