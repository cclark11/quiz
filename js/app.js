var questionNumber;
var questionsCorrect;

var questions = [
	{
		question:"How many events are there in women’s gymnastics?",
		answers:["4","5","6","7"],
		correctAnswer:"4",
		userAnswer:""
	},
	{
		question:"How many events are there in men’s gymnastics?",
		answers:["4","5","6","7"],
		correctAnswer:"6",
		userAnswer:""
	},
	{
		question:"Which of the below is not an event in men’s gymnastics?",
		answers:["Vault","Uneven Bars","Horizontal Bar","Pommel Horse"],
		correctAnswer:"Uneven Bars",
		userAnswer:""
	},	
]
$(document).ready(function(){
	newGame();
	nextQuestion();
	$("form").on("submit",function(event){
		event.preventDefault();
		userAnswer=$("input[type=radio]:checked").val();
		correctAnswer=questions[questionNumber].correctAnswer;
		checkResponse();
		questionNumber++;
		if(questionNumber<questions.length){
			nextQuestion();
		}
		else{
			end();
		}
	});
	$("#newGame").click(function(){
		newGame();
	});

});
function newGame(){
	questionNumber=0;
	questionsCorrect=0;
	$("#end").hide();
	$("#count").text("");
	$("#answers").text("");
	$("#question").text(questions[0].question);
	for (var i=0; i<questions[0].answers.length; i++) {
		$("#answers").append('<li><input type="radio" name="answers" value="'+questions[questionNumber].answers[i]+'">'+questions[questionNumber].answers[i]+'</li>');
	}

}
function checkResponse(){
	if(userAnswer==correctAnswer) {
		questionsCorrect++;
		$("#count").append("<li>Question "+(questionNumber+1)+": &#10004;</li>");
	}
	else if(userAnswer!=correctAnswer) {
		$("#count").append("<li>Question "+(questionNumber+1)+": X</li>");
	}
}
function nextQuestion(){
	$("#answers").text("");
	$("#question").text(questions[questionNumber].question);
	for (var i=0; i<questions[questionNumber].answers.length; i++) {
		$("#answers").append('<li><input type="radio" name="answers" value="'+questions[questionNumber].answers[i]+'">'+questions[questionNumber].answers[i]+'</li>');
	}
}
function end() {
	$("#end").show();
	$("#score").append("You scored "+questionsCorrect+"/"+(questions.length));
	$("#next").hide();
}