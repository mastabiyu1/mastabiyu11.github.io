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
	let myobj = {};
	let prop = Object.keys(this);
	let val = Object.values(this);
	
	myobj.numProperties = prop.length;
	
	let countNum = 0;
	for (let part of prop) {
	
	if (part.length < 3) countNum++;
	}
	myobj.cntShortName = countNum;
	
	let countObj = 0;
	for (let part of val) {
	
	if (typeof part === "object") {
	countObj++;
	}
	}
	myobj.cntReference = countObj;
	
	return myobj;
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
 




