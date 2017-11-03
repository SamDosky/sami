
var p = document.querySelectorAll("p");

 for(var i = 0 ; i < p.length ;i++) {

    if( i % 2 === 0){
    p[i].classList.add('bgGreen')
    } else {
    p[i].classList.add('bgYellow')   
    }
 }
