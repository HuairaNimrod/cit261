
function myFunction() {
            var x, text;
        x = document.getElementById("numb").value;
               
        text="https://restcountries.eu/rest/v2/name/";
        text+=x;
    

    /*-----remove list for more input countries-----*/
    
    var list = document.getElementById("root");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    
    /*------removes the inputCountry Id-----*/
    var inptCountry = document.getElementById("inputCountry");
    var rqst = document.getElementById("requestCountry");
    
    inptCountry.removeChild(rqst);
    /*----------------*/
             

const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', text, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

     
    /*---Country flag is called from JSON---*/    
       const logo = document.createElement('img');
        logo.src = movie.flag;
        
        container.appendChild(card);
        card.appendChild(logo);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = ':( it is not working!';
    app.appendChild(errorMessage);
  }
}

request.send();
    
    /*-----DOM Manipulation----*/
    var tit= document.getElementsByClassName("center");
    tit[0].style.background= "#F2691A";
    
}