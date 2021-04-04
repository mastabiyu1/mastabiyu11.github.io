"use strict"
 function sumAll(n){
if(n===0){
    return 0;
}
return n + sumAll(n-1);
}
console.log(sumAll(4));//10


let LlinkedList ={};
LlinkedList.add;
LlinkedList.remove;
LlinkedList.print;
  function add(){
    let node4={
      value:7,
       next:null,
      };
      let node3={
      value:5,
       next:node4,
      };
      let node2={
      value:2,
       next:node3
      };
    let node1={
      value:1,
       next:node2,
      };
      return node;
  }
  function remove(){
     let res=node1.next.next
     node2.next=null;
     let node4={
      value:7,
       next:null,
      };
      let node3={
      value:5,
       next:node4,
      };
      let node2={
      value:2,
       next:node3
      };
    let node1={
      value:1,
       next:node2,
      };
      return node;
  } 
  console.log(remove(2));

  function print(){
    return LlinkedList.add();
  }