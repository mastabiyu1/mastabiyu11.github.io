

function printNumbers(from,to){
    for(let i=from;i<to;i++){
     console.log(i)
    }
  }
  let e=setInterval(printNumbers,1000,3,5);
  clearInterval(e);
  

////////////////////////////////////////////////////////////////
//the setTimeout  will have to wait until the loop finishes running .and then will be executed last
//so whatever time it takes for the loop the setTimeout will be last.
// • When will the scheduled function run? after the loop has finished running.
// • After the loop.
// • Before the loop.
// • In the beginning of the loop.
// • What is alert going to show? 100000000,

//The i becomes the last one: 100000000.
let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
};