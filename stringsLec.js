
var str = ''
var num = 10

for (var i = 1; i <= num; i++) {
    if (i > 1) {
        str += ', '
    }
    str += i;
    console.log(i + ' ' + str);
}

console.log("//////////")

var list;
var num = 7

function joinList(n) {
    str = ''
    for (var j = n; j >= 1; j--) {
        if (j >= 1) {
            str += ', '
        }
        str += j;
    }   
    return str; 
}

for (var i = 1; i <= num; i += 3) {
    list = joinList(i);
    console.log(i + ' ' + list + ', BLAST OFF');
}

var name = 'peter'
console.log (name.toUpperCase());
for ( var i = 0 ; i < name.length ; i ++){
    console.log(name)
}





function DrEvil (num) {

if ( num === 1000000) {
    console.log(num + ' dollars (pinky)')
}
else {
    console.log(num + ' dollars')
    }
}

DrEvil(1000000)

function verbing (str) {

    if (str.length > 3 && str.substring (str.length - 3 , str.length)=== 'ing'){

    console.log (str + "ly")
    }

  else if (str.length >= 3){

    console.log (str + 'ing')
    }
 else {
 console.log (str)
 }
}
verbing('willing')




    

   function getInitString (str){

 return str.slice(0 , -1)
}

console.log (getInitString('lover'))


function capitalLast (str) {

   console.log (str[str.length-1].toUpperCase()) 
}

capitalLast ('love')




function nameCase(name) {
    var theRest = name.toLowerCase().trim();
    var space = theRest.indexOf(' ');
    var result = '';
    while (space !== -1) {
        var part1 = theRest.slice(0, space + 1); // "Barack "
        theRest = theRest.slice(space + 1);
        result += part1[0].toUpperCase() + part1.slice(1);
        space = theRest.indexOf(' ');
    }
    result += theRest[0].toUpperCase() + theRest.slice(1);
    return result;
}

 nameCase ('BArack Obama')

 var animal = 'moose'
 console.log(animal[animal.length - 1])



console.log('///////////')

function arrLength (array) {
    
    console.log(array.length)
    
    }
    
    arrLength ([1,2,3,4,5])
    arrLength (['all','dee','llolo','yyuu'])



function longestArr (array1 , array2) {

  if (array1.length > array2.length) {

    return(array1)
  }
  else if (array1.length < array2.length ){

    return(array2)
  }

  else {
      return(null)
  }

}

console.log(longestArr([1,2,4,5] , [6,2,3,4,8]))

console.log('/////////')

function middleElement (array){

    if (array.length % 2 === 1){

        return (array[array.length/2 - 0.5] )
    }
else if (array.length % 2 === 0)
   return ("Oops, there's no middle...")
}

console.log(middleElement([1,2,3,4,5,6,7]))

console.log('/////////')


var sum = 0
function sumArray(array) {
    for ( var i = 0 ; i < array.length ; i++) 
    sum += array[i]
    return sum        
    
}

console.log (sumArray ([1,2,3,4,5,6]))

console.log('/////////') 





// function range(min , max){
//     var arr = []
  
//     for (var i = min ; i <= max ; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log(range(2,6))



function rangeWithStep (min , max , step){

var arr = []

if (step <= 0 || step === undefined )
     step = 1 

    for (var i = min ; i <= max ; i += step){
        arr.push(i) 
    }

return arr
}    

console.log(rangeWithStep(2,20,2))







// console.log('//////////')
// arr1 = [1,2,3]
// arr2 = [4,5,6]

// function arrayinsert (a1 , a2 , where) {

//     for (var i = 0 ; i < a2.length ; i++) {

//         a1.splice (where - 1 , 0 , a2[i])
//     }
// }

// arrayinsert(arr1 ,arr2 , arr1.length)

// console.log (arr1)



function doubleTrouble(arr){
var newArr = []
for ( var i = 0 ; i < arr.length ; i++) {

    newArr[i] = arr[i] * 2

 }

return newArr

}
console.log(doubleTrouble([5,6,7]))

console.log("/////////////")
var bdYear = 1988 

var fYear = 2025 

var age1 = fYear - bdYear 

var age2 = fYear - bdYear + 1

console.log (' I will be either ' + age1+ ' or ' + age2 + ' in ' + fYear)

console.log("/////////")

var age1 = 30

var maxAge = 60

var snacks = 5

var totalSnacks = ( maxAge - age1) * snacks * 365

console.log(' i will need ' + totalSnacks + ' to last you until the age of ' + age1 )

console.log("/////////")

var R = 10
var circumference = 2 * R * Math.PI
var area = Math.pow(R , 2) * Math.PI
console.log('The Circumference is ' + circumference + ' .')
console.log('The Area is ' + area + ' .')

console.log("/////////")

var Celsius = 10 
var Fahrenheit = 10
var C = ( Fahrenheit - 32) * 1.8
var F = Celsius * 1.8 + 32
console.log ( Celsius + ' in Celsius is ' +  F + ' Fahrenheit')
console.log (Fahrenheit + ' in Fahrenheit is ' + C + ' Celsius')


console.log ('/////////////')

// function numToBit(num){ 
//     var number = num 
//     var result = [] 
//     while(number >= 1 ){ 
//         result.unshift(Math.floor(number%2)) 
//         number = number/2 } 
//         return result 
//     }
//     numToBit(5)


    function decToBit (num) {


        while (num >= 1 ){
             if ( num % 2 === 1 )
             console.log('1')
             else 
             console.log('0')
             num--
        }
    }

    decToBit(10)

    console.log('///////////////////')

    var rooms = [
        {
            price: 200,
            location: '11 Broadway, NY',
            maxOccupants: 3,
            amenities: ['washer/dryer', 'wifi', 'cable']
        },
        {
            price: 100,
            location: '11 Delancey, NY',
            maxOccupants: 1,
            amenities: []
        },
        {
            price: 2000,
            location: '1 Park Pl, NY',
            maxOccupants: 2,
            amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
        }
    ];
    
    // make the string exactly as long as len
    function padTo(str, len) {
        if (str.length > len) {
            return str.slice(0, len - 3) + '...'
        } else {
            while (str.length < len) {
                str += ' '
            }
            return str;
        }
    }
    
    // make the string exactly as long as len
    function padLeft(str, len) {
        var money = str
        if (money.length > len) {
            return money.slice(0, len - 3) + '...'
        } else {
            while (money.length < len) {
                money = ' ' + money
            }
            return money;
        }
    }
    
    function toMoney(num) {
        return '$' + num.toString()
    }
    
    function whatsAvailable(rooms) {
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].reserved) {
                continue;
            }
            console.log(
                padTo(rooms[i].location, 20), 
                ' ', 
                padLeft(toMoney(rooms[i].price), 8)
            );
        }
    }
    
    function bulletPoints(list) {
        return '\n - ' + list.join('\n - ')
    }
    
    function showDetails(room) {
        console.log('Location:', room.location)
        console.log('Price:', toMoney(room.price))
        console.log('Max. Occupancy:', room.maxOccupants)
        console.log('Amenities:', bulletPoints(room.amenities))
    }
    
    function reserve(which) {
        rooms[which].reserved = true
        console.log('Thank you for reserving')
    }
    
    whatsAvailable(rooms);
    
    console.log('----------')
    
    var selected = 2;
    showDetails(rooms[selected]);
    
    console.log('----------')
    
    reserve(selected);
    
    console.log('----------')
    
    whatsAvailable(rooms);


    console.log('//////////////')



    var recipe = 
        { 
            name: 'Mole' ,
            servings: 2 ,
            ingredients: ['cinnamon','cumin','cocoa']
        }
            function recipee() {
                
                for ( var key in recipe ) {
                    console.log(key + ' ;  ' + recipe[key])

                }    
        }
             function recipee() {
                for ( var key in recipe ) {
                    if (recipe[key].length < 1)
                    console.log(key + ' ; '+ "\n" + recipe[key])

             }
      }
       
        recipee()

console.log('/////////////')

        var Recipe = 
        {
            title: 'oreo truffles',
            servings: 1,
            ingredients: ['Oreos', 'Cream Cheese', 'melted chocolate']
        }
        
        function myrecipe(Recipee){
            for( var key in Recipee){
                 if(key === 'ingredients'){
                    console.log(key + ": " + Recipee[key].join(' > '));
                } else {
                console.log(key + ': ' + Recipee[key]);
                }
             }
        }
        myrecipe(Recipe)

        console.log('/////////')

        // var recipe = {
        //     name: 'Mole',
        //     servings: '2',
        //     ingredients:['cinnamon', 'cumin', 'cocoa'] }
        //     function Recipe(recipe){
        //     for(var key in recipe) {
        //     if(key === 'ingredients'){
        //     console.log(key + ':')
        //     for(var i= 0; i<recipe[key].length; i++) {
        //     console.log(recipe[key][i])
        //     }
        //     } else {
        //     console.log(key + ': ' + recipe[key])
        //     }
        //     }
        //     }
        //     Recipe(recipe)

        console.log('////////')


    //     var country = {
    //         name : 'USA' ,
    //         language : 'english',
    //         capital : 'wachinton',
    //     }

    //     function getProps (C){
    //         var array = []
    //         for (var key in C )
    //         array.push(key)
    //         console.log(array.length)
    //     }
    // getProps(country)
        console.log('////////')


//         var country = {
//             name : 'USA' ,
//             language : 'english',
//             capital : 'wachinton',
//         }

//         function getProps (C){
//             var array = []
//             for (var key in C )
//             array.push(key)
//             console.log(array.length)
//         }
    
//    getProps (country) 


var country = {
    name : 'USA' ,
    language : 'english',
    capital : 'wachinton',
}

function getProps(c){
console.log(Object.keys(c))
}

console.log ('///////////////')

var movies = [
    {
    title : 'wonder women' ,
    director : 'Patty Jenkins' ,
    watched : true
    }
    ,
    {
    title : 'super man' ,
    director : 'Chrisopher Nolan ' ,
    watched : false
    }
    ]
    function watch(movie) {
    for (var key in movie){
    // console.log(movie[key].name + " directed by " + movie[key].director)
    if (movie[key].watched === true){
    console.log ('you already watched ' + movie[key].title + " directed by " + movie[key].director)
    } else 
    console.log ('you need to watch ' + movie[key].title + " directed by " + movie[key].director)
    }
    }
    watch(movies)

    var str = 'hello'
    // let's concatenate something to str
    str += ' there'
    console.log(str)

    var name = 'jane'
    // This will not work as expected
    name[0] = name[0].toUpperCase()
    // name will still return 'jane'
    console.log(name)

    function cl (name){
    
    var capitalized = name.slice(0,name.length - 1 ) + name[name.length-1].toUpperCase()
    console.log(capitalized)
    }
    cl ('alaa')
    cl ('soliman')
// var alaa = 'alaa'
//     console.log(alaa.slice(1,3))

//     var str = "alaamuneer"; 
//     var res = str.slice(1, 5)+ str[0].toUbberCase();

    function bo (nam) {
        var fuck = nam.slice(nam.length-2,nam.length-1)
        return fuck
    }
    console.log(bo('ylba'))

    function mixup (a , b) {
      
      var name = b.slice(0,1) + a.slice(1) + ' '  + a.slice(0,1) + b.slice(1)
      return name
    }
    console.log(mixup('ali','j'))


    var animals = ['cat', 'dog', 'racoon', 'giraffe']
    
    // this will print 'cat'
    console.log(animals)

    console.log('////////////////')

    var arr = [];
    for(var x = 0; x <= 8 ; x++){
        arr[x] = [];    
        for(var y = 0; y <= 8 ; y++){ 
            console.log(arr[x][y] = '\n' + '#' )   
        }    
    }

    num =[]
    for (var l = 0 ; l < 8 ; l++){
        
        var sum = num[l]
        console.log(sum.join())
        
    }
    