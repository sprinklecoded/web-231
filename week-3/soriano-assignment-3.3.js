var header = require('../header.js'); 

/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 28 July 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/ 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)

/*
var eventKeyCode = 13;

if (eventKeyCode == 13) {
    console.log("The enter key was pressed"); 
} else if (eventKeyCode == 16) {
    console.log("The shift key was pressed"); 
} else if (eventKeyCode == 32) {
    console.log("The spacebar key was pressed")
} else if (eventKeyCode == 8) {
    console.log("The backspace / delete key was pressed");
} else {
    console.log("Unrecognized key press"); 
}
*/
// end program 

var eventKeyCode = 13;

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 8:
        console.log("The spacebar key was pressed");
        break;
    case 32:
        console.log("The backspace /delete key was pressed");
        break;
    default:
        console.log("Unrecognized key was pressed");
        break;
}