// needs to start with a start button and then reveals the form
// with timer going

//need to set up a place for the timer number to be seen

//the radio buttons can only be clicked once

// there must be a done button but the game will be finished
//if timer runs out.

//the game reveals final answers correct,false, and unanswered
// $(document).ready(function(){
// $("#button").click(function () {
// 	console.log('click');
// 	setTimeout($(".questions").removeClass("hidden"), 30000);
	
// });});
var intervalId;
var shouldRestart = false;
$(document).ready(function() {
    
    var time;
    $("#button").on("click", timerRun);
    $("#restart").on('click', function() {
    	shouldRestart = true;
    	timerRun();
    })
    //how to make sure the button on responds to being clicked once
    function timerRun() {
    	if(intervalId && !shouldRestart){
        	return 
        	//this return allows things not to continue down the funciton unless these two varibles are both true.
        	//and the !shouldRestart is true here because of the !  infront which makes things oposite
       	}
        time = 30;
        intervalId = setInterval(countdown, 1000)
        $(".questions").removeClass("hidden");
        $("#time").on("click", function() {
            clearInterval(intervalId);

        });
        // btn.disabled = true;
    }

    function countdown() {

        time--;
        $("#time").html(time);
        if (time === 0) {
            $("#time").append("<div> Time's Up!");
            $(".questions").addClass("hidden");
            clearInterval(intervalId);
        };
    }
    

    });

// function thirtySeconds(){
// 	for (var i = 30; i >= 0; i--) {
// 		setTimeout(oneSecond(i), 1000);

// 	}
// 	function oneSecond(i){
// 		$("#time").innerHtml(i);
// 	};
// }});

function gradeTest() {
    //variables with global implications
    var totalQuestions = 3;
    var correctAnswers = 0;
    var alertText;
    var i;

    //iterate through all options in radio button list
    //if checked value is true, answer is correct
    var a1 = document.getElementsByName('firstquestion');
    for (i = 0; i < a1.length; i++) {
        if (a1[i].checked) {
            if (a1[i].value == 'true') {
                correctAnswers++;
                break;
            }
        }
    }

    var a2 = document.getElementsByName('secondquestion');
    for (i = 0; i < a2.length; i++) {
        if (a2[i].checked) {
            if (a2[i].value == 'Incredible Hulk') {
                correctAnswers++;
                break;
            }
        }
    }

    //iterate through all options in radio button list
    //if checked value is augusta, answer is correct
    var a3 = document.getElementsByName('thirdquestion');
    for (i = 0; i < a3.length; i++) {
        if (a3[i].checked) {
            if (a3[i].value == 'Hulk') {
                correctAnswers++;
                break;
            }
        }
    }
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      $("#giphy").append('<img src="'+response.data[0].images.fixed_height.url+'"/>');
    });

    //put correct answers in new array
    //iterate through all options in check box list
    //add selected item to new array
    //sort both checked answer and correct answer arrays by same criteria
    //if both lists have same length and items at same data at same indexes,
    //then we have all the correct answers for that question

    //check selected index of pull-down box for correct answer
    //indexes ALWAYS start at 0!
    if (correctAnswers == totalQuestions) {
        alertText = "Congratulations! You got all the questions right!";
        clearInterval(intervalId);
    } else {
        alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!";
                clearInterval(intervalId);

    }
    alert(alertText);
}
