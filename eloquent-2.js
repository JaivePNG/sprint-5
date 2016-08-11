ChessBoard Grid:



var size = 8;
var grid = "";


for (var i = 0; i < size; i++) {

  for (var j = 0; j < size; j++) {

    if ((j + i) % 2 == 0)

      grid += " ";

    else

      grid += "#";

  }

  grid += "\n";

}



console.log(grid);



FizzBuzz



function fizzBuzz(number){

if((number%3)===0 && (number%5)!==0){

console.log ("Fizz");

}else if ( (number%3)!==0 && (number%5)===0){

console.log ("Buzz");

}

else if((number%3)===0 && (number%5)===0)

{

console.log ("FizzBuzz");

}else{

console.log (number);

}

}



for(i=0;i<=100;i++)

fizzBuzz(i);



Pyramid #



var i = '#';

for(i='#'; i.length<=8; i+='#')

console.log(i);