p1_name =  localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");
p1_score= 0;
p2_score= 0;
document.getElementById("player1_name").innerHTML= p1_name + " : ";
document.getElementById("player2_name").innerHTML= p2_name + " : ";
document.getElementById("player1_score").innerHTML= p1_score;
document.getElementById("player2_score").innerHTML= p2_score;
document.getElementById("player_q").innerHTML="Question Turn - "+p1_name;
document.getElementById("player_ans").innerHTML="Answer Turn - "+p2_name;function send()
{
    n1=document.getElementById("number1").value;
    n2=document.getElementById("number2").value;
    actual_answer=parseInt(n1)*parseInt(n2);
    question_word="<h4>"+n1+"X"+n2+"</h4>";
    input="<br>Answer: <input type='text' id='input_check_box'>";
    check_button= "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";
}
q_turn="player1";
a_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if (answer == actual_answer)
    {
        if (a_turn == "player1")
        {
            up1_score=p1_score + 1;
        document.getElementById("player1_score").innerHTML=up1_score;
        }
        else
        {
            up2_score=p2_score+1;
            document.getElementById("player2_score").innerHTML=up2_score;
        }
    }
    if (q_turn == "player1")
    {
        q_turn="player2";
        document.getElementById("player_q").innerHTML="Question Turn - "+p2_name;
    }
    else
    {
        q_turn="player1";
        document.getElementById("player_q").innerHTML="Question Turn - "+p1_name;
    }
    if (a_turn == "player2")
    {
        a_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer Turn - "+p1_name;
    }
    else
    {
        a_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer Turn - "+p2_name;
    }
    document.getElementById("output").innerHTML=" ";
}
document.getElementById(player_q).innerHTML="Question Turn - "+p1_name;
document.getElementById(player_ans).innerHTML="Answer Turn - "+p2_name;
