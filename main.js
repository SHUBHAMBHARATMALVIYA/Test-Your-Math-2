// Global Variable
var audio = new Audio('click_sound.wav');
var audio_win = new Audio('Winning_Sound.wav');
var audio_lose = new Audio('Losing_Sound.wav');
var c = 0;
var bool1_submit = false;
var rand_num = 0;
var score = 0;
var rand_num_final = 0;
var Mute_fun = true;
// Global variable for Stopwatch 


var sec = 0;
var min = 0;
var Stopwatch = false;


// Age Categores
function Age_5_8() {
    audio.play();
rand_num = 1;
console.log(rand_num);
}

function Age_9_12() {
    audio.play();
    rand_num = 2;
    console.log(rand_num);
    }

function Age_13_16() {
    audio.play();
    rand_num = 3
    console.log(rand_num);
    }
// Function that is responsible for the question
    function START() {
        // Code for age category
    if (rand_num == 0) {
        window.alert("Please choose a age category");
    }
    if (rand_num == 1) {
        rand_num_final = 10;
        console.log(rand_num_final);
        Question_Sub();
    }
    if (rand_num == 2) {
        rand_num_final = 100;
        console.log(rand_num_final);
        Question_Sub();
    }
    if (rand_num == 3) {
        rand_num_final = 1000;
        console.log(rand_num_final);
        Question_Sub();
    }
}
function Question_Sub() {
    sec = 0;
    min = 0;
    Stopwatch = true;
    STOPWATCH();
    bool1_submit = true;
    // Code for the questions
    audio.play();
    document.getElementById("Start").style.width = "200px";
    document.getElementById("Start").innerHTML = "Next Question";
    var question_1_sub = Math.floor(Math.random() *rand_num_final);
    console.log(question_1_sub);
    var question_2_sub = Math.floor(Math.random() *rand_num_final);
    console.log(question_2_sub);
    Final_answer_sub = question_1_sub - question_2_sub;
    console.log(Final_answer_sub);
    var question = "What is the difference of " + question_1_sub + " - " + question_2_sub + "  ?";
    console.log(question);
    document.getElementById("Question_sub").innerHTML = question ;
}
    
    // Code will allow the user to use the enter key to submit 
    window.addEventListener("keydown", keypressed)

    function keypressed(e) {
        key_code = e.keyCode;
        console.log(key_code);

        if (key_code == 13) {
            SUBMIT();
        }
    }
    // Code to Submit the Answer
function SUBMIT() {
    audio.play();
    Stopwatch = false
     var Answer = document.getElementById("sub_input").value;
    console.log(Answer);
    if(bool1_submit == false) {
        window.alert("Please click Start Quiz button")
    }else {
        if (Answer == "") {
            window.alert("Please write the answer before clicking the submit button")
        } else {
            if (Final_answer_sub == Answer) {
                if (Mute_fun == true){
                audio_win.play();
                }
                document.getElementById("result_sub").innerHTML = "Hoorah! Its Correct";
                score = score + 1;
                console.log(score);
                document.getElementById("score_board_sub").innerHTML = "Score : " + score;
            }else {
                if (Mute_fun == true){
                    audio_lose.play();
                    }
                document.getElementById("result_sub").innerHTML = "Its incorrect the correct answer is " + Final_answer_sub ;
                score = score - 1;
                console.log(score);
                document.getElementById("score_board_sub").innerHTML = "Score : " + score;
            }
        }
    }
}
function Audio_play() {
    audio.play();
}



// Stopwatch Code 

function STOPWATCH() {
    if (Stopwatch == true){
    sec = sec + 1;
    console.log("minute  "+ min);
    if (sec == 60) {
        min = min + 1;
        console.log("minute  "+ min);
    }
    document.getElementById("Minute").innerHTML = min; 
    document.getElementById("Second").innerHTML = sec;  
        setTimeout( "STOPWATCH()",1000)
    }

}
// Mute Audio and ON Audio 
function Mute() {
    Mute_fun = false;
    console.log(Mute_fun);
}
function ON_AUDIO() {
    Mute_fun = true;
    console.log(Mute_fun); 
}
