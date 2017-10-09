"use strict"
/*Task 1
var i="#";
while (i.length<=7){
    3
        console.log(i);
    4
        console.log("");
    5
        i+="#";
    6
    }
    */
 /* 
 Task 2
 let i=1;
    for(i=1; i<=100; i++){
     if(i%15===0){
         console.log("FizzBuzz");
     }
     if(i%3===0){
      console.log("Fizz");
    }
     if(i%5===0) {
      console.log("Buzz");
    }
      else{
       console.log(i);
      }
      
    }
    */
    /* Task 3
    function createChess(x, y) {
        for (var i = 0; i < y; i++) {
          var string = '', a, b;
      
          if (i % 2) {
            a = '#';
            b = ' ';
          } else {
            a = ' ';
            b = '#';
          }
      
          for (var j = 0; j < x; j++) {
            if (j % 2) {
              string += a;
            } else {
              string += b;
            }
          }
      
          console.log(string);
        }
      }
       */
     /* Task 4
     
     function min(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      }
   */
 /* Task 5
 function isEven(n){
      if(n%2==0){
          return "True";
      }
      else{
          return "False";
      }
  }
*/
/* Task 6
function countChar(string, ch) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == ch)
        counted += 1;
    return counted;
  }
*/
function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
  }

