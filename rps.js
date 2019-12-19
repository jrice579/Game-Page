function rps()
{
    var comp = Math.floor(Math.random()* 3) + 1;
    if (comp == 1) 
    {
        comp = "rock";
    } 
    else if (comp == 2) 
    {
        comp = "paper";
    } 
    else 
    {
        comp = "scissors";
    }
    var user = document.getElementById("input").value.toLowerCase();
    document.getElementById("userOutput").innerHTML = "you chose " + user;
    document.getElementById("computerOutput").innerHTML = "computer chose " + comp;
    if (comp == user) 
    {
        document.getElementById("rpsOutput").innerHTML = "tie";
    } 
    else if ((user == "rock" && comp == "scissors") || (user == "paper" && comp == "rock") || (user == "scissors" && comp == "paper")) {
        document.getElementById("rpsOutput").innerHTML = "you win";
    } 
    else 
    {
        document.getElementById("rpsOutput").innerHTML = "comp wins";
    }
}