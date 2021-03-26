/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	if(string==null){
		return "missing argument";
	}

	if(typeof string == "number"){
		return "argument not string";
	}
    let str="";
    string.split("");
        for(let i=0;i<string.length;i++){
	       if(i % 2!==0){
		      str+=string[i];
	     }
   }
   return str;
   }
// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let num=0;
	array.reduce(function(accumulator, currentValue){

		if (currentValue >= 0) {
		  num += currentValue ;
		}
	  }, []);
	  return num;
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {

	function numberFilter(item) {
		
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
		let result=[];
		for(let a of array){
			if(a<0){
			 result.push(-a);
			}else{
				result.push(a);
			}
		}
		return result;
	}
// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
	let arr=[];
    let newArr=[]; 
        for(let i=0;i<array.length;i++){
            if(array[i]===0){
                 array[i]="*";
            }
            arr.push(array[i]);
        }
		return arr;
    }




