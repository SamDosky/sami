function range(min, max){
    var arr = [];
    for (var i = min; i <= max; i++){
        arr.push(i)
    }
    return arr;
}

function sumArr(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfRange(min, max){
  return sumArr(range(min, max));
}

console.log(sumOfRange(1,5)); 


//...................... 

function add1(num){
    return num + 1;
 }
 
 function add2(num){
    return add1(add1(num))
 }
 
 function add3(num){
    return add2(add1(num))
 }
 
 function add4(num){
    return add2(add2(num))
 }
 
 function add5(num){
    return add4(add1(num))
 }
 
 function add8(num){
    return add5(add3(num))
 }
 
 console.log(add8(10)+add1(1))


 //----------------------

 function double (num) {
  return num * 2
 }
 function square (num) {
     return double (num * num)
 }

 function doubleSquare (num) {
 
    return square(double (num))
 }

 console.log(doubleSquare(10))

 //--------------------------

 function classyGreeting ( Fn , Ln) {

    return ('hello '+ Fn +' '+ Ln)
 }

 function yell (name){

 return classyGreeting(name.toUpperCase())
 }

 function yellGreeting (Fn , Ln){

    return yell(classyGreeting(Fn , Ln))
 }

 console.log(yellGreeting('sami' , 'dosky'))

 //----------------------------

 function dublicate (array) {

    array = array.filter( function( item, index, inputArray ) {
        return inputArray.indexOf(item) == index
        } )
 }


  console.log(dublicate([1,2,3,3,4,4]))

  //-------------------------


function oddCaps(str) {
    
    if (typeof str === 'string'){
    
        for ( var i = 1 ; i <= str.length ; i = i + 2 ){
    
        return (str.slice(i).toUpperCase())
    
    }
    
    } else 
    
    return undefined
    
    }

    console.log(oddCaps('alaa'))

///////////////////////////////////////////////////
    console.log('ex1-----------')

    function forEachElem(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
          callback(arr[i]);
        }
      }
      
      function logEachElement(num) {
        console.log(num);
      }
      
      var arr = [10,12,13,22,44, 'string'];
      
      forEachElem(arr, logEachElement);

      //////////////////////////////////////////////////////

      console.log('ex2-----------')


      function forEachElem(arr, callback){
        for (var i = 0; i < arr.length; i++) {
           callback(arr[i])
        }
     }
     var arr = [10,'Gabe',13,'22',44, 'string', true];

     function logArrTypes(mixedArr){
     console.log(mixedArr + ' is a' + typeof mixedArr)
     }

     forEachElem(arr, logArrTypes)
     
     //////////////////////////////////////////////////////

     console.log('ex3-----------')
     
    //  var sami = 0
    //  setInterval(sec , 1000);
     
    //  function sec() {
    //           console.log(sami++ )
        //  }
     //////////////////////////////////////////////////// 


         console.log('ex4-----------')



         
         function conservativeSpender(balance)  {
            return balance > 100
          }
          
          function liberalSpender(balance) {
            return balance > 10
          }
          
          function horribleSaver (balance) {
            return balance > 0
          }
           
          function shouldIBuyThis(balance , callback) {

            if (callback(balance)){

                console.log ("Sure! I've got the money!")
            } else 
               console.log ("Nope! Gotta keep my savings up!")
        
          }
          
          shouldIBuyThis(15,horribleSaver)
           
////////////////////////////////////////////////

          function double(num) {
            return num + num;
          }
          
          function square(num) {
            return num * num;
          }
          
          console.log(square(double(2)))

          ///////////////////

          function repeatTwice(str) {
            return str + str;
         }
         
         function exclaim(str) {
           return str + '!';
         }
         
         console.log(repeatTwice(exclaim('hello')));

   



         /////////////////////

         function map (arr , func) {
             
            newarr = []
            for (var i = 1 ; i < arr.length ; i++){
                console.log(newarr.push(func(arr[i]))
            }

            return neware
         }
        
         function add4(num){
             return num + 4
         }

         map([1,2,3], add4)