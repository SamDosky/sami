

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
    
tasks = input.split(' ')

tasks.push(createTask(title , false))

})

function forEachElem(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i)
    }
}

