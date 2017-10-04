// //Github: https://github.com/C4Q/AC_4.1/blob/master/units/fundamentals/lessons/user_input/user_input.md
// //Lev gives examples for us to understand the concept before going into node
// function sayHello(){
//     console.log('hello')
// }
// setInterval(sayHello(), 1000)       
// //sayHello is invoking the function setInterval, but it will give an undefined result, so the way that we need to write it is:
// var sayHello = function (){          
//     console.log('hello')
// }
// setInterval(sayHello,1000)      //passing the name of the function as a variable it will invoke the setInterval function and execute to the time of 1 second. 
// setTimeout(sayHello, 0)         //setTimeout and setInterval will wait till the end of any sequential code to execute 
// setInterval(sayHello, 100)         
// setInterval(sayHello, 150)
/////////////////
// var readline = require('readline')  //require is a way to load the external js function for this ex we are loading readline
// console.log(readline)               //readline is a file or modual available built into node gives a way for us to read data from the terminal - a readable stream
// var rl = readline.createInterface({         //after using readline the rl object will take an input and 
//     input: process.stdin,                   
//     output: process.stdout
//   })
// //on is a way for us to respond to events. another instance of a synchronous, Whenever the line function happens we are calling parseInput. 
//   function parseInput(input) {       
//     console.log('your input was: ' + input)
//   }
//   rl.on('line', parseInput)     //we are passing a string 'line' to rl that checks what the string is and based on what the string is it would do something. Readline (r1) knows what the line event is. 
  
//   rl.on('line', function(input){
//       console.log(typeof input)
//       console.log()
// //   }


// var readline = require('readline')
// var rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// })
// var trackString = function() {
// }


// rl.on('line', function(input){
// for (var i = 0 ; i < 20; i++) {

// var str = String(input)
// console.log(input++)
// // }
// })

// console.log('insert a string: ')
////////////////////////
// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('guess> ');
// rl.prompt();
// rl.on('line', function(line) {
//     if (line === "right") rl.close();
//     rl.prompt();
// }).on('close',function(){
//     process.exit(0);
// });

var i = process.openStdin();
i.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" +  d.toString() + "]");
       
  });



