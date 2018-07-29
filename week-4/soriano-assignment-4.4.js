var header = require('../header.js');
/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 28 July 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */


// start program

//Original Array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
function getValue(index, filter) {
  console.log("--ORIGINAL ARRAY--");
  states.forEach(function(states){
    console.log(states);
  });
  console.log("")

  //Sorted Array
  console.log("--SORTED ARRAY--");
  states.sort();
  states.forEach(function(states){
    console.log(states);
  });
console.log("")

  //Selected Value
  console.log("--SELECTED VALUE--");
  var filtered = states.filter(function (str) { return str.includes(filter);});
  console.log(filtered);
}


// Output

getValue([2], "Iowa");


// end program