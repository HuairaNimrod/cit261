//querySelector only returns  the first elements that matches the specificied selectors
var btn = document.getElementById("button1");

   btn.onclick= function(){
       
       var element = document.getElementById("myDIV");
        element.classList.toggle("change");
       
   }
   
  