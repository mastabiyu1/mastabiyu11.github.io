/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {

	this.name=nam;
	this.country=country;
	this.grades=grades;
	let sum=0;
	for( this.numProperties in obj){
		     sum++;

	}
	for(let i=0;i<Person.length;i++){
		
	}

	return {};
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/

// function computeGrade(grades) {
// 	let sum=0;
// 	let avg=0;
// 	for(let i=0;i<grades.length;i++){
// 	//for(let grad of grades){
// 	  sum+=grades[i];
// 	avg=sum/grades.length;
// 	}
// 	return avg;
//    }
function Person(name, country, grades) {
    this.name=name;
	this.country=country;
	this.grades=grades;
    this.computeGrade=function(){
		let sum=0;
		let ave=0;
		for(let res of this.grades){
			sum+=res;
			ave=sum/this.grades.length;
		}
      return ave;
	};		
}
 












