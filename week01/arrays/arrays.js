var colors =["blue","yellow","green","white","red"];

function simpleArray() {
    var num1 = parseInt(document.getElementById("option").value);
  
    var list =""
    color.innerHTML = colors[num1];
        for(i=0;  i<colors.length; i++)
            {
                list+=colors[i]+", ";
            }
    listColor.innerHTML = list;
}
//add new color

function addColor() {
    var newElement = document.getElementById("newColor").value;
    
    var list =""
    var item= newElement;
    
    colors[colors.length]= item;
    
        for(i=0;  i<colors.length; i++)
            {
                list+=colors[i]+", ";
            }
    
    listNewColor.innerHTML = list;
}
