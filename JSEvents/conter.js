

// raise Counter
var    		myDivs=document.getElementById("count"),
					myDown;

				function gemu(){
					"use strict";
					if(myDivs.textContent>=1000){
						myDivs.textContent="Done....";
						clearInterval(myDown);
					}else{
						myDivs.textContent=parseInt(myDivs.textContent)+1
						
					}
				}

var myDown=setInterval(gemu,1000);

// Stop Button
var myBtn=document.getElementById("btn");
myBtn.onclick = function(){
						"use strict";
					if(myBtn.textContent=="Stop"){
             
             clearInterval(myDown);
						clearInterval(myTime);
            myBtn.textContent="Start";
             }
						}