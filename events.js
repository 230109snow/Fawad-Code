
for (let i = 1 ; i <= 101; i++) {
    if (i % 15 == 0) {
        document.write('FizzBuzz ' + (i)+ ' ');
    } 
     else if (i % 3 == 0){
        document.write('Fizz ' + (i)+ ' ');
         } 
    else if (i % 5 == 0){
        document.write('Buzz ' + (i)+ ' ' );
    } 
    else document.write(' ' + i + ' ');
}

