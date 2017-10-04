
// function and (x , y){
//     if (x == true & y == true){
//         return true
//     }
//     return false
// }

// console.log(and(false , false))


// function addOnlyNumbers (foo , bar){

// if (typeof(foo + bar) === 'number' ){
//     return(foo + bar)
// } else {
//     return NaN
// }
// }

// console.log(addOnlyNumbers(Math.PI,5))

// // function isAllNum (arr){

// // for (var i = 0 ; i < arr.length ; i++) {

// //     if (typeof arr[i] !== 'number'){
// //     return false
// //      } 
// // }
// // return true 
// // }

// console.log(isAllNum([1,7,4,5,9]))

var name = 'sami'
var arr2 = name.split("")
console.log(arr2)
console.log(arr2.join())

var primes = [0, 1, 2, 3, 5, 7, 11];
var primeStr = primes.join('');
console.log(primeStr)

console.log(primeStr)

console.log(name.slice(1,2))

array1 = [1,2,3,4]
array2 = [4,5,6,7,9]

console.log(array1.join(array2))

var arr = ['dog', 'cat', 'mouse','lol']
console.log(arr.splice(1,2))


// var count = 0;
// while (count < 16) {
//   if (count % 4 === 0) {
//     console.log(“Count “ + count + “ is a multiple of four.”);
//   }
//   count += 1;
// }
// console.log(“We are done here.”)

// var pm = {
//     name: "Ashley",
//     guru: true,
//     toes: 10
//   }
//   if (pm.guru) {
//     console.log( pm.name + " is a guru." );
//   } else {
//     console.log( pm.name + " is not a guru, but has " + pm.toes + " toes." );
//   }
//   var x = ['kelly','beyonce','michelle']

//   console.log(x.join(''))

//   console.log(x.join(' -- '))
var arc = [1,2,'dam','alaa']
var arrrr = []

for (var i = 0 ; i < arc.length ; i++){

    if ( typeof arc[i] === 'string')
          arrrr.push(arc[i])

}
console.log(arrrr[0])
