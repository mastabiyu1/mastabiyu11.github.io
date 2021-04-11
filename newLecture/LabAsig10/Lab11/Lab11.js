//Q#1

let student={
    firstName:"",
    lastName:"",
    grades:[],
    inputNewGrade:function(newGrade){
      
      return this.grades.push(newGrade);

    },
    computeAverageGrade:function(){
      return this.grades/this.grades.length
      }
    };
  
    let st1 = Object.create(student);
    st1.firstName = "Messon";
    st1.lastName = "Alex";
    st1.grades = 98;
  
    let st2 = Object.create(student);
    st2.firstName = "Kelcy";
    st2.lastName = "joy";
    st2.grades = 93;
  
    let st3 = Object.create(student);
    st3.firstName = "John";
    st3.lastName = "Doe";
    st3.grades = 90;
  
    let array = [st1,st2,st3];
  
  console.log(st1.grades);
  console.log(student.inputNewGrade());
  
  console.log(student.computeAverageGrade());

  /////////////////////////////////////////////////////////////////////
  //Q#2
  
function Student(firstName,lastName,grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
  
  Student.prototype.inputNewGrade = function(){
      return this.grades.push(grades);
  }
   Student.prototype.computeAverageGrade = function(){
      return this.grades/this.grades.length
    }
  let std1 = new Student("John","Doe",[90]);
  let std2 = new Student("Meson","Dan",[70]);
  let std3 = new Student("Kelsy","Chris",[69]);
  let std4 = new Student("kiel","Keven",[89]);
  
  let arr=[std1,std2,std3,std4];
  let a = arr.map(item => item.grades)
      .reduce((acc,curVal)=> acc + (curVal/grades.length),0)
  console.log(a);
  /////////////////////////////////////////////////////////////////////////
  //Q#3
let obj = {
    0:"zire",
    1: "Holand",
    2: "Canada!",
    length: 3,
    };
    // obj.join = Array.prototype.join;
    // console.log(obj.join(','));
    
    //obj.join = Array.prototype.join;
    //console.log(obj.join(', '));
    
    // obj.sortes = Array.prototype.sort;
    // console.log(obj.sortes());

    obj.sort = Array.prototype.sort;
    console.log(obj.sort());
    