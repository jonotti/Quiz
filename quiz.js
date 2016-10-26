//object smiður
function Question(question, choices, correct) {
    this.question = question;
    this.choices = choices;
    this.correct = correct;
}

var allQuestions = [new Question('What is 1+2?', [1, 2, 3, 4], 3),
		    new Question('What is 2+4?', [2, 4, 6, 8], 6),
		    new Question('What is 4+8?', [6, 8, 10, 12], 12),
		    new Question('What is 8+16?', [22, 24, 26, 28], 24),
		    new Question('Is the world flat?', ['yes', 'no'], 'no')];

//fisher yates
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

	// Pick a remaining element…
	i = Math.floor(Math.random() * m--);

	// And swap it with the current element.
	t = array[m];
	array[m] = array[i];
	array[i] = t;
    }

    return array;
}
var teljari = 0;
var wrong = false;
var correct = 0;


function createQuestion(index) {
    var spurning = document.getElementById('spurning');
    spurning.innerHTML += '<h2>SPURNING ' + (index+1) + '/ ' + allQuestions.length + '</h2>';
    spurning.innerHTML += '<h2>' + allQuestions[index].question + '</h2>';
    for (var i = 0; i < allQuestions[index].choices.length; i++) {
	var choice = document.createElement('div');
	choice.id = 'answer-' + i;
	var item = "<li class='answer' id='answer-" + i + "'>";
	item += '<div>' + allQuestions[index].choices[i] + '</div>';
	item += '</li>';
	choice.innerHTML = item;
	//console.log(item);
	spurning.appendChild(choice);
	choice.addEventListener("click", function(e) {
	    if (e.target.textContent == allQuestions[index].correct) {
			console.log("correct");
			if(wrong == true){
				next();
			}
			else{
				correct += 1;
				next();
			}
	    }
	    else{
		e.target.classList.add('wrong');
		wrong = true;
	    }
	}, false);
	console.log(choice);
    }
}

function next() {
	wrong = false;
	var spurning = document.getElementById('spurning');
	if (teljari < (allQuestions.length -1 )){
		teljari += 1
		spurning.innerHTML = "";
		createQuestion(teljari);
	}
	else{
		spurning.InnerHTML = "";
		spurning.innerHTML += '<h1>YOU HAVE FINISHED THE QUIZ!!!</h1>';
		spurning.innerHTML += '<h1>you scored: ' + correct + '/5</h1>';
	}
}



shuffle(allQuestions);
createQuestion(teljari);



