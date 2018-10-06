function adult() {
  const input = document.getElementById("age").value;
  const display = document.getElementById("message");
  var comment;
  
    if(input<18){
      comment = "You're not adult ";
    }
    else{
        comment = "You're adult"
    }
  
  display.innerText = comment;

}

//switch example

function numberText() {
  const input = document.getElementById("number").value;
  const display = document.getElementById("choose");
  var numberChoose;
  
    switch (input){
        case '5': numberChoose="five";break;
        case '4': numberChoose="four";break;
        case '3': numberChoose="three";break;
        case '2': numberChoose="two";break;
        case '1': numberChoose="one";break;
        case '0': numberChoose="zero";break;
        default: numberChoose="out of range";break;
    }
  
  display.innerText = numberChoose;

}