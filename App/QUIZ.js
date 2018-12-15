var header = document.querySelector('header');
    var section = document.querySelector('section');
        
    /*----Obtaining the JSON-----*/
        
    var requestURL = 'https://huairanimrod.github.io/cit261/App/test.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
          var Cars = request.response;
        
          showBrands(Cars);
        }
   
    /*-----Cars Information----*/
        
    function showBrands(jsonObj) {
          var brand = jsonObj['questions'];

        for (var i = 0; i = brand[i].number; i++) {
            var myArticle = document.createElement('article');
                var myH2 = document.createElement('h2');
                var myList = document.createElement('ul');


                myH2.textContent = brand[i].question;
                
                
            /*----choices---*/
                var superPowers = brand[i].choices;
                    for (var j = 0; j < superPowers.length; j++) {
                    
                    var listItem = document.createElement('li');
                    var check = document.createElement('input');
                        check.setAttribute('type', 'radio');
                        check.setAttribute('name', 'question');    
                        
                        
                        var choice_text = document.createElement('label');
                        choice_text.setAttribute('for', check.name);
                        
                        choice_text.textContent = brand[i].choices[j];
                        listItem.appendChild(check);
                        listItem.appendChild(choice_text);
                        
                    /*I used this befor to list the choices*/    
                      // listItem.textContent = superPowers[j];
                      myList.appendChild(listItem);
                    }
            

                myArticle.appendChild(myH2); 
                myArticle.appendChild(myList);
         
            section.appendChild(myArticle);
            
            
            
          }
        
        
        }

/* 
    https://huairanimrod.github.io/cit261/App/test.json 
    xxxxxxx!!!

    https://huairanimrod.github.io/testApp/test.json
*/