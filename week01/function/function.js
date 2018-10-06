function simpleMath() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    
   
    var s = num1 + num2;
    var sb = num1 - num2;
    var m = num1 * num2;
    var d = num1 / num2;
   
 
    addi.innerHTML = s;
    subs.innerHTML = sb;
    divi.innerHTML = d;
    mult.innerHTML = m;
}



  
   
