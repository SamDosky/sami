var body = document.querySelector('body');
document.addEventListener('click', function(event) {
    var isLeftside = event.clientX < window.innerWidth / 2; 
    body.style.backgroundColor = isLeftside ? 'mediumaquamarine' : 'peachpuff' })``






    document.addEventListener("click" ,function(event){
        var t = event.target.style
        t.backgroundColor = t.backgroundColor === "gold"? t.backgroundColor === "gold": t.backgroundColor === "white"
    })