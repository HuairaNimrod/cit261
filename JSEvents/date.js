window.onload= function displayDate() {
    
    var d = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dayJS = d.getDate();
    
    
    var fullDate =  months[d.getMonth()];
    fullDate += " "+ dayJS;
    fullDate += ", "+ d.getFullYear();
        

    document.getElementById("jsDate").innerHTML =fullDate;
    
}