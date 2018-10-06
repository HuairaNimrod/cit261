// For loop
var happy = "";
var i;
    for(i= 0; i < 4; i++){
      happy += " I am for loop "+i+ "<br>"
        forLoop.innerHTML = happy;
    }


//While Loop
var sad = "";
var j=0;
    while( j< 4){
      sad += " I am while loop "+j+ "<br>"
        whileLoop.innerHTML = sad;
        j++;
    }


// do/while loop
var hungry = "";
var k=0;
   do{
      hungry += " I am do/while loop "+k+ "<br>"
        doWhileLoop.innerHTML = hungry;
       k++;
    }while(k< 4)