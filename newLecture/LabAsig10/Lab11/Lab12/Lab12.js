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
  