/*----header----*/
document.getElementById("body").style.background = "#114B5F";
document.getElementById("body").style.color = "#fff";


document.getElementById("tit").style.color = "#F0C808";
document.getElementById("tit").style.fontFamily = "Georgia";

document.getElementById("tit3").style.color = "#C6DABF";

document.getElementById("footer").style.color = "#C6DABF";




/* ---------query selector all!!! */
var x = document.querySelectorAll("article");
for(var i = 0; i<x.length; i++){
    x[i].style.border = "1px solid #247BA0";
    x[i].style.margin = "1em";
    x[i].style.textAlign="center";
    x[i].style.backgroundColor="#F4AD46";
    x[i].style.color ="#247BA0";
    x[i].style.borderRadius ="15px 0px 15px 0px";
}

/*----queryselector only for First!!----*/

var section = document.querySelector('article');
section.setAttribute("id", "xd");
section.style.border = "1px solid #70C1B3 ";
section.style.backgroundColor = "#247BA0";
            /*------by id------*/
document.getElementById("xd").style.color = "#F0C808";
document.getElementById("xd").style.borderRadius = "5px";

