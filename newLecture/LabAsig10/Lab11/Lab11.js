//Q#1

let student={
    firstName:"",
    lastName:"",
    grades:[],
    inputNewGrade:function(newGrade){
      
       this.grades.push(newGrade);
    },
    computeAverageGrade:function(){
      return this.grades.reduce((acc,cVal)=> acc+cVal)/this.grades.length
      }
    };
  
let st1 = Object.create(student);
    st1.firstName = "Messon";
    st1.lastName = "Alex";
    st1.grades = [98,90,60,50];
  
let st2 = Object.create(student);
    st2.firstName = "Kelcy";
    st2.lastName = "joy";
    st2.grades = [93,89,80,90];
  
let st3 = Object.create(student);
    st3.firstName = "John";
    st3.lastName = "Doe";
    st3.grades = [90,98,86,92];
  
let array = [st1,st2,st3];
  
  console.log(st1.grades);
  console.log(st2.grades);
  console.log(st3.grades);

   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(st1.inputNewGrade(90));
  console.log(st2.inputNewGrade(89));
  console.log(st3.inputNewGrade(100));
                                         
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(st1.grades);
  console.log(st2.grades);
  console.log(st3.grades);

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(st1.computeAverageGrade());
  console.log(st2.computeAverageGrade());
  console.log(st3.computeAverageGrade());

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");                                      



//   /////////////////////////////////////////////////////////////////////
  //Q#2
  
  function Student(firstName,lastName,grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  }
  
  Student.prototype.inputNewGrade = function(newGrade){
       this.grades.push(newGrade);
  }

   Student.prototype.computeAverageGrade = function(){
      return this.grades.reduce((acc,cVal) => acc + cVal,0)/this.grades.length
  
    }
  let std1 = new Student("John","Doe",[90,80,87,97]);
  let std2 = new Student("Meson","Dan",[70,80,86,84]);
  let std3 = new Student("Kelsy","Chris",[69,80,96,84]);
  let std4 = new Student("kiel","Keven",[89,86,88,79]);
  
  let arr=[std1,std2,std3,std4];
  console.log(std1.inputNewGrade(76));
  console.log(std1.inputNewGrade(90));
  console.log(std1.inputNewGrade(80));
  console.log(std1.inputNewGrade(87));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std2.inputNewGrade(69));
  console.log(std2.inputNewGrade(80));
  console.log(std2.inputNewGrade(98,));
  console.log(std2.inputNewGrade(76));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std3.inputNewGrade(98));
  console.log(std3.inputNewGrade(69));
  console.log(std3.inputNewGrade(90));
  console.log(std3.inputNewGrade(93));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std3.inputNewGrade(93));
  console.log(std3.inputNewGrade(90));
  console.log(std3.inputNewGrade(88));
  console.log(std3.inputNewGrade(95));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std1.grades);
  console.log(std2.grades);
  console.log(std3.grades);
  console.log(std4.grades);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std1.inputNewGrade(90));
  console.log(std2.inputNewGrade(89));
  console.log(std3.inputNewGrade(78));
  console.log(std4.inputNewGrade(86));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std1.grades);
  console.log(std2.grades);
  console.log(std3.grades);
  console.log(std4.grades);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  console.log(std1.computeAverageGrade());
  console.log(std2.computeAverageGrade());
  console.log(std3.computeAverageGrade());
  console.log(std4.computeAverageGrade());

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");                                      


  

//   /////////////////////////////////////////////////////////////////////////
//   //Q#3
// let obj = {
//     0:"zire",
//     1: "Holand",
//     2: "Canada!",
//     length: 3,
//     };
//     // obj.join = Array.prototype.join;
//     // console.log(obj.join(','));
    
//     //obj.join = Array.prototype.join;
//     //console.log(obj.join(', '));
    
//     // obj.sortes = Array.prototype.sort;
//     // console.log(obj.sortes());

//     obj.sort = Array.prototype.sort;
//     console.log(obj.sort());
    
Array.prototype.sort = function () {​​​​​​​​
    let temp = arr;
    let sorting = [];
    for (let  i = 0; i < arr.length; i++) {​​​​​​​​
    sorting[i] = Math.min(...temp);
    temp = temp.filter((item) => item !== sorting[i]);
    if (temp.length < 1)
    break ;
        }​​​​​​​​
    return sorting;
    }​​​​​​​​
     
    let arr = [88,96,100,67,59,89].sort();
     
    console.log(arr)
     
        
    



