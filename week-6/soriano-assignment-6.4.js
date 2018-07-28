var header = require('../header.js');

/*
============================================
; Title: Assignment 6.4
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
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties

    person: {
        // person properties
    }
};

// end program


var ticket = {
  id: 1,
  name: "uh",
  dateCreated: "4/20",
  priority: 1,
  person:{
    id: 25,
    firstName: "John",
    lastName: "Denver",
    jobTitle: "Singer"
  }
};
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket["person"]["firstName"] + " " + ticket["person"]["lastName"] +" (" + ticket["person"]["jobTitle"]+").");
