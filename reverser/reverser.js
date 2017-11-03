

    
    form = document.querySelector('form');
    form.addEventListener('submit', function(event){
    event.preventDefault()
    var x = document.getElementById("text")

     var charVers = x.value.split("").reverse().join("") 

     var j =document.getElementById("para")

     j.innerHTML = charVers
    })