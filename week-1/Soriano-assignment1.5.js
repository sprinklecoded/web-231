/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 18 June 2018
; Modified By: Shelita Soriano
; Description: This program demonstrates the
; use of JavaScript types, values, and
; and variables in an application.
;===========================================
*/

//employee data

var employees = (firstName, lastName, middleName, address, payRate, hireDate)=>{
    console.log('First Name: '+ firstName + '\n');
    console.log('Last Name: '+ lastName + '\n');
    console.log('Middle Name: '+ middleName + '\n');
    console.log('Address: '+ address + '\n');
    console.log('Pay Rate: '+ payRate + '\n' );
    console.log('Hire Date: '+ hireDate + '\n' + '\n');
}

employees('Joey', 'Smith', 'Brandon', '114 Boyles Drive Omaha, CA', '$25.0', '6/30/99');
employees('Drake', 'Milo', 'Johnson', '234 Microsoft Road Monroe, LA', '$7.5', '7/3/90');
employees('Jude', 'Razzi', 'Menza', '999 Update Blvd Boston, MA', '$14.5', '2/8/17');
employees('Abby', 'Dunne', 'Raine', '456 Cya Street Tyler, TX', '$16.5', '1/9/00');
employees('Bianca', 'Ellie', 'Rivera', '501 Swig Blvd Rasta, CA', '$10.5', '5/25/15');