// • Question 2:
// • Create an object student using class syntax which has
// • Properties: firstName:String, lastName:String, grades: Array
// • Methods:
// • inputNewGrade(newGrade): push newGrade to grades
// • computeAverageGrade(): return average of grades
// • Create an Array with multiple students
// • Then compute the average grade for all students in the array

class Student{
    constructor(firstName,lastName,grades){
  
      this.firstName = "";
      this.lastName = "";
      this.grades = [];
  
    }
       inputNewGrade(newGrade){
       this.grades.push(newGrade);
       }
        computeAverageGrade(){
        return this.grades.reduce((acc,cVal)=> acc + cVal,0)/this.grades.length;
      }
  }
  
  let stu1 = new Student("John","Dalt",[87]);
  stu1.inputNewGrade(90);
  stu1.inputNewGrade(96);
  stu1.inputNewGrade(70);
  
  let avg1 = stu1.computeAverageGrade();
  console.log("Joha Dalt"+" "+ avg1);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
  
  let stu2 = new Student("Dani","Hag",[80]);
  stu2.inputNewGrade(90);
  stu2.inputNewGrade(98);
  stu2.inputNewGrade(80);
  
  let avg2 = stu2.computeAverageGrade();
  console.log("Dani Hag"+" "+ avg2);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
  
  let stu3 = new Student("Wond","Amb",[87]);
  stu3.inputNewGrade(100);
  stu3.inputNewGrade(89);
  stu3.inputNewGrade(80);
  
  let avg3 = stu3.computeAverageGrade();
  console.log("Wond Amb" + " "+ avg3);console.log
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
  
  let stu4 = new Student("Get","Akal",[98,99,97,80]);
  stu4.inputNewGrade(99);
  stu4.inputNewGrade(97);
  stu4.inputNewGrade(80);
  
  let avg4 = stu4.computeAverageGrade();
  console.log("Gech Akal"+" "+ avg4);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
  let arr = [avg1,avg2,avg3,avg4];
  let totAvg = arr.reduce(function(acc,cVal,index,array){
    return acc + cVal/array.length
  },0);
  console.log(totAvg);
  //////////////////////////////////////////////////////////
  //or
//   let arr = [stu1,stu2,stu3,stu4];
// let totAvg = arr.reduce(function(acc,cVal,index,array){
//   return acc + cVal.computeAverageGrade()/array.length
// },0);
// console.log(totAvg);

/////////////////////////////////////////////////////////////////////////////////
//Q1
//The below clock function will be converted in to class
function Clock({ template }) {
    let timer;
    function render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);
    console.log(output);
    }
    this.stop = function () {
    clearInterval(timer);
    };
    this.start = function () {
    render();
    timer = setInterval(render, 1000);
    };
    }
    let clock = new Clock({ template: 'h:m:s' });
    clock.start();
    

////////////////////////////////////////////////////////////////////////////
//conversion of the function in to the class
class Clock {
    constructor({ template }) {
    this.template = template;
    }
    render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);
    console.log(output);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
    }
    }
    let clock = new Clock({ template: 'h:m:s' });
    clock.start();
    ///////////////////////////////////////////////////////////////////////////
// constructor function.
// ***Also add a line of code that will stop the
// clock after 10 ticks
// ans-setTimeout(()=>clock.stop(), 10000);
// *** What is the inner function of the constructor
// function?
// there is no inner function at all.
// *** What is the local variable of the constructor
// function?
// ans- there is no local variable inside the constructor.
// *** What is the clock “interface” returned by the
// constructor function?
// ans It is an object of Clock which use parameter of the constructor tto build the object.
// *** What are the closures?
// ans - thers is no closures we just only have methodes timer and constructore.
// *** What are the private variables and
// functions?
//  ans - here we don't have private variables (we don't have getters and setters).
// *** What are the public methods?
// stop, start, render(),stop() and last but not list start().
// *** How does this example illustrate that a
// JavaScript class is really a function and not
// an object? the parameter inside the constructor function will become a parameter inside the constructor
// of the class functions will be converted into methods,in addition the prototype of the class is 
// function.prototype which leades to the fact that a class is a function except the differenceror that class
// has features like,  it boundes all the methodes insid it and runs in strict mode it can have getters and setters. 
