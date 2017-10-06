

var readline = require('readline')

// We will be able to use `rl`
// Only After creating the readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
}
rl.on('line', function(input) {
    
var tasks = input.split(' ')
if (tasks[0] === "add"){
tasks.push(createTask(tasks[1]+' '+tasks[2]  , false))

console.log(tasks[3])
}
else{
    console.log("the first word must be add")
}

})



