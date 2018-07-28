var header = require('../header.js');

/* ============================================ 
; Title: Assignment 4.3
; Author: Professor Krasso 
; Date: 28 July 2017 
; Modified By: 
; Description: This program demonstrates the ; use of JavaScript types, values, and ; and variables in an application. 
;=========================================== */ 

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

 
// start program
var vehicles =["car", "truck", "motorcycle", "airplane", "bus"];


// function
function getValue(arr, val) {
    for (var i = 0; i <arr.length; i++) {
        if (arr[i] === val)
        console.log(arr[i]);
    }

}


// Output
console.log("-- DISPLAYING ARRAY ITEMS --")
for (var i = 0; i < vehicles.length; i++) {
    console.log(vehicles[i]);
}

//new line
console.log("")


//Selected Value:
console.log("-- SELECTED VALUE --");
getValue(vehicles, "bus");

getValue(vehicles, "motorcycle");


// end program