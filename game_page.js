player1_name=localStorage.getItem("player1") ;
player2_name=localStorage.getItem("player2") ;
player1_score=0 ;
player2_score=0 ;

document.getElementById("player1_name").innerHTML=player1_name + " : " ;
document.getElementById("player2_name").innerHTML=player2_name + " : " ;
document.getElementById("player1_score").innerHTML=player1_score ; 
document.getElementById("player2_score").innerHTML=player2_score ;
document.getElementById("player_question").innerHTML= "Question Turn : "+ player1_name ; 
document.getElementById("player_answer").innerHTML="Answer Turn : " + player2_name ;

function Send() {
question_word="<h4 id=<'word_display'> Q."+ number1 + "x" + number2"</h4>" ;
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class= 'btn btn-info' onclick=' check()'>Check</button>";
row  = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getelementby1d("word").value = "";
}
