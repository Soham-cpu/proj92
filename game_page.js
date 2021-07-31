player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1_name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2_name;

function sendQuestion(){
    no1=document.getElementById("number1_input").value;
    no2=document.getElementById("number2_input").value;

    actualAnswer = parseInt(no1) * parseInt(no2);


    questionLine = "<h4> Q." + no1 + "x" + no2; "</h4>"
    answerLine = "<br><br>Answer : <input type='text' id='answerInput'></input>";
    button = "<br><br><button id='answerCheckButton' onclick='checkAns()' class='btn btn-info'>Check</button>"

    row = questionLine + answerLine +button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

questionTurn = "player1";
answerTurn = "player2"

function checkAns(){
    getAnswer = document.getElementById("answerInput").value;
    console.log(getAnswer);

    if(getAnswer == actualAnswer){
        if(questionTurn == "player1"){
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2";
        answerTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Question - " + player2_name;
        document.getElementById("playerAnswer").innerHTML = "Answer - " + player1_name;
    }
    else{
        questionTurn = "player1";
        answerTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Question - " + player1_name;
        document.getElementById("playerAnswer").innerHTML = "Answer - " + player2_name;
    }
    document.getElementById("output").innerHTML = "";
}
