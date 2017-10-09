

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task
}

taskArr = []

function toggle(arr , id){
    if(arr[id].completed === false ){
        arr[id].completed = true
        console.log(arr[id].title.slice(3) + " is completed")
    } else if (arr[id].completed === true){
        arr[id].completed = false
        console.log(arr[id].title.slice(3) + " is not completed ")
    }
    }

rl.on('line', function (input) {
  var updateInput = input.toLowerCase().split(' ')
   if (updateInput[0] === 'add')
   {   
    taskArr.push(createTask(input,false))
        for (var i = 0 ; i < taskArr.length ;i++){
           console.log(i + " " +taskArr[i].title.slice(3) + ". " + ' completed ; ' + taskArr[i].completed )} 
    } else if(updateInput[0] === 'toggle' & updateInput[1] !== undefined){
           var id = Number(updateInput[1])
           toggle(taskArr , id)
    } else if (updateInput[0] === 'show' & updateInput[1] === 'all'){
        for (var i = 0 ; i < taskArr.length ;i++){
           console.log(i + " " +taskArr[i].title.slice(3) + ". " + ' completed ; ' + taskArr[i].completed ) }
    } else if (updateInput[0] === 'show' & updateInput[1] === 'active' ){
        for (var i = 0 ; i < taskArr.length ;i++){
            if(taskArr[i].completed === false){
            console.log(i + " " +taskArr[i].title.slice(3) + ". " + ' completed ; ' + taskArr[i].completed ) }
        }
    } else if (updateInput[0] === 'show' & updateInput[1] === 'completed' ){
        for (var i = 0 ; i < taskArr.length ;i++){
            if(taskArr[i].completed === true){
            console.log(i + " " +taskArr[i].title.slice(3) + ". " + ' completed ; ' + taskArr[i].completed ) }
        }
    }
    console.log('choose and type one of the option { ADD , toggle , show Active , show Completed }')
})
    
    if (taskArr = [] ){
        console.log("the list is empty you need to add task first")
    }
