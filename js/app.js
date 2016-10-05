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
	{
		question:"Who was awarded the first perfect 10 in women’s gymnastics?",
		answers:["Shannon Miller","Nadia Comaneci","Andreea Raducan","Svetlana Khorkina"],
		correctAnswer:"Nadia Comaneci",
		userAnswer:""
	},	
	{
		question:"On which event was the first perfect 10 received?",
		answers:["Vault","Bars","Beam","Floor"],
		correctAnswer:"Bars",
		userAnswer:""
	},	
	{
		question:"Who was the youngest member of the 2016 US Olympic women’s gymnastics team?",
		answers:["Madison Kocian","Simone Biles","Gabby Douglas","Laurie Hernandez"],
		correctAnswer:"Laurie Hernandez",
		userAnswer:""
	},
	{
		question:"The “Magnificent Seven” participated in which Olympics?",
		answers:["1992","1996","2000","2004"],
		correctAnswer:"1996",
		userAnswer:""
	},
	{
		question:"Which US gymnast was coached by a parent?",
		answers:["Nastia Liukin","Carly Patterson","McKayla Maroney","Shawn Johnson"],
		correctAnswer:"Nastia Liukin",
		userAnswer:""
	},
	{
		question:"Which US gymnast attended an Ivy League university?",
		answers:["Amy Chow","Kirsten Maloney","Courtney McCool","Alicia Sacramone"],
		correctAnswer:"Alicia Sacramone",
		userAnswer:""
	},
	{
		question:"Marta and Bela Karolyi’s first gym in the US was established in which city?",
		answers:["Chappaqua, NY","Houston, TX","Burlington, ME","Los Angeles, CA"],
		correctAnswer:"Houston, TX",
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
	// When the user clicks on <span> (x), close the modal
	$(".close").onclick = function() {
	    $("#myModal").css("display","none");
	}

	$(".newGame").click(function(){
		newGame();
		$("#myModal").css("display","none");
	});

});
function newGame(){
	questionNumber=0;
	questionsCorrect=0;
	$("#end").hide();
	$(".count").text("");
	$("#answers").text("");
	$("#question").text(questions[0].question);
	for (var i=0; i<questions[0].answers.length; i++) {
		$("#answers").append('<li><input type="radio" name="answers" value="'+questions[questionNumber].answers[i]+'">'+questions[questionNumber].answers[i]+'</li>');
	}

}
function checkResponse(){
	if(userAnswer==correctAnswer) {
		questionsCorrect++;
		$(".count").append("<li>Question "+(questionNumber+1)+": &#10004;</li>");
	}
	else if(userAnswer!=correctAnswer) {
		$(".count").append("<li>Question "+(questionNumber+1)+": X</li>");
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
	$("#myModal").css("display","block");
	$("#score").text("You scored "+questionsCorrect+"/"+(questions.length));
}