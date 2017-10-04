

function dec(num) {
     for (var i = num ; i >= 1 ; i --) {

         console.log( i )
     }
    }
     dec (10)

     function printEven (num){

         for ( var i = 0 ; i <= num ; i += 2){

           
          console.log(i)

         }

     }

     printEven(10)
  
     console.log ('hi')
     
     function printOdd (num){
        
                 for ( var i = 1 ; i <= num ; i += 2){
                  console.log(i)      
                 }
             }
        
             printOdd(10)

             console.log ('///////////////////////////')

     function nine (num){
 
     for (var i = num * 9 ; i > 0 ; i -= 9){

        console.log(i)
     }
    }
     nine(5)
             
     console.log ('/////////////hi')

     function assignGrade(score) {
        if (score > 90) {
            return 'A'
        } else if (score > 80) {
            return 'B'
        } else if (score > 70) {
            return 'C'
        } else if (score > 65) {
            return 'D'
        } else {
            return 'F'
        }
    }
     function grades(num1 , num2) { 

     for (i = 0 ; i <= num2 - num1 ; i ++){

        console.log( num1 + i + ' - ' + assignGrade (num1 + i))

     }
    }
   
    grades (60 , 100)

     console.log("lllkkkkkkkkk")
  
     var size = 8; 
     
     var board = "";
     
     for (var y = 0; y < size; y++) {  
       for (var x = 0; x < size; x++) {
         if ((x + y) % 2 == 0)
           board += " ";
         else
           board += "#";
       }
       board += "\n";
     }
     
     console.log(board);

  
        
    }

