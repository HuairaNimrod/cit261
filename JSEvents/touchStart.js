
document.getElementById("touchAndroid").ontouchstart = touchMe;

function touchMe() {
    
   
    var original = document.getElementById("touchAndroid");
    var newSrc="images/apple.png"
    
    original.src= newSrc;
    
    
    var captionOriginal = document.getElementById("androidCaption");
   
    var captionReplace = document.createElement("appleCaption");
    
   
    captionReplace.innerHTML = "I am an apple!";
    captionOriginal.parentNode.replaceChild(captionReplace, captionOriginal);
    

}
