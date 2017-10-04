
var readline =  require('readline');
var rl = readline.createInterface(process.stdin , process.stdout);



rl.addListener('data' , function(answer){

  
   console.log(answer)
})