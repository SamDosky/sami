
var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  
   console.log('insert input')
  rl.on('line', function(input) {
   

   var inputArr = input.split(' ')
   inputArr.push(input)
  var sum =+ inputArr 
    console.log('the sum is: ' + (sum)) 
      
  })

  


