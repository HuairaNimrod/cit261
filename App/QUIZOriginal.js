var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
}

getJSON('https://huairanimrod.github.io/cit261/App/test.json',  function(err, data) {
    
    if (err != null) {
        console.error(err);
    } else {
        
        var text = `Date: ${data.date}
Time: ${data.time}
Unix time: ${data.milliseconds_since_epoch}`
    
        alert(text);
    }
})


  


/*
    
   var section = document.querySelector('section');
        
    /*----Obtaining the JSON-----
        
    var requestURL = 'https://huairanimrod.github.io/cit261/App/test.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
          var Cars = JSON.parse(request.response);
        
          alert(Cars[0]);
        }

   
   
  
  /*
var allQuestions = [{
  question: "Who is Prime Minister of the United Kingdom?",
  choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
  correctAnswer: 0
}, {
  question: "Who is Genry?",
  choices: ["PTERODACTEL", "Gipsy", "Viktor Prit", "Everything."],
  correctAnswer: 3
}, {
  question: "Who is Viktor Prit?",
  choices: ["Genry", "Man of Action", "Gay Lord", "Buryak"],
  correctAnswer: 1
}, {
  question: "Where is the Pterodactel?",
  choices: ["In da Kirillovka", "At Genry's place", "In Michael Circle's coffin"],
  correctAnswer: 1
}];

[]
function Quiz(options) {
  var elem = options.elem;
  var allQuestions = options.questions;
  var q_number = allQuestions.length;

  var answers = [];
  var questions = [];

  var correct_answers = 0;
  var current_number;

  generateQuestions(allQuestions);
  
  initQuiz();

  function generateQuestions(q) {
    for (var i = 0; i < q_number; i++) {
      var question = document.createElement('div');
      question.classList.add('question');
      question.id = 'question';

      var title = document.createElement('h1');
      title.textContent = q[i].question;

      question.appendChild(title);

      var list = document.createElement('ul');

      for (var j = 0, len = q[i].choices.length; j < len; j++) {
        var choice = document.createElement('li');

        var check = document.createElement('input');
        check.setAttribute('type', 'radio');
        check.setAttribute('name', 'question');

        var choice_text = document.createElement('label');
        choice_text.setAttribute('for', check.name);
        choice_text.textContent = q[i].choices[j];

        choice.appendChild(check);
        choice.appendChild(choice_text);

        list.appendChild(choice);
      }

      var prev_button = document.createElement('button');
      prev_button.textContent = 'Previous Question';
      prev_button.addEventListener('click', prevQuestion);

      var next_button = document.createElement('button');

      if (i === q_number - 1) {
        next_button.textContent = 'Finish Him';
        next_button.addEventListener('click', finishQuiz);
      } else {
        next_button.textContent = 'Next Question';
        next_button.addEventListener('click', nextQuestion);
      }

      question.appendChild(list);

      if (i > 0) question.appendChild(prev_button);
      question.appendChild(next_button);

      questions.push(question);
    }
  }

  function render_question(number) {
    var warning = elem.getElementsByClassName('warning')[0];
    if (warning) {
      elem.removeChild(warning);
    }
    elem.appendChild(questions[number]);
    $('#question').hide().fadeIn(500);
  }

  function initQuiz() {
    current_number = 0;
    render_question(current_number);
  }

  function checkAnswers() {
    for (var i = 0; i < q_number; i++) {
      if (answers[i] === allQuestions[i].correctAnswer) {
        correct_answers++;
      }
    }
  }

  function validateAnswer() {
    var list_items = elem.getElementsByTagName('input');
    var answered = false;
    for (var i = 0, len = list_items.length; i < len; i++) {
      if (list_items[i].checked) {
        answers.push(i);
        answered = true;
        break;
      }
    }
    if (!answered && !elem.getElementsByClassName('warning')[0]) {
      var warning = document.createElement('span');
      warning.textContent = "Answer the question before you proceed, please.";
      warning.classList.add('warning');

      elem.appendChild(warning);
    }
    return answered;
  }

  function nextQuestion() {
    if (validateAnswer()) {
      elem.removeChild(questions[current_number]);
      current_number++;
      render_question(current_number);
    }
  }

  function prevQuestion() {
    elem.removeChild(questions[current_number]);
    answers.pop();
    current_number--;
    render_question(current_number);
  }

  function finishQuiz() {
    if (validateAnswer()) {
      checkAnswers();
      elem.removeChild(questions[current_number]);
      var result = document.createElement('p');
      if (correct_answers === 0) {
        result.textContent = "Thank you for taking this quiz! Sorry, but none of your answers were right :( Try again if you want to improve your score.";
      } else {
        result.textContent = "Thank you for taking this quiz! Your final score is: " + correct_answers + " correct answers!";
      }
      elem.appendChild(result);
    }
  }
}

var quiz = new Quiz({
  elem: document.getElementById('quiz'),
  questions: allQuestions
});
  */
