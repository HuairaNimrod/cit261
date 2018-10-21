// ---------------1 constructor Person
    function Person(firstName){
        this.firstName = firstName;
    }    
    
           Person.prototype.sayHi = function(){
                alert("Hi, I'm " +this.firstName)
            }

    

// -----------------2 constructor Worker
   function Worker(firstName, area) {
        
        Person.call(this, firstName);//get the Person's arguments
        this.area= area;
    };
   
 


// Create objet Worker.prototype inherits Person.prototype

Worker.prototype = Object.create(Person.prototype);

Worker.prototype.constructor = Worker;


    //using sayHi Person method


    Worker.prototype.sayHi= function(){
            alert("Hi, I'm "+ this.firstName+ ". I'm from the " +this.area+" area.");
        };

    //adding a new method say goodbye

    Worker.prototype.sayGoodbye = function(){
        alert("Ciao!!");
    };


//show on screen

var worker1 = new Worker("Nimrod", "IT");
worker1.sayHi();
worker1.sayGoodbye();

