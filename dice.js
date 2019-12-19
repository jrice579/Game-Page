function dice() {
    console.log("in diceRoll")
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    var total = roll1 + roll2;
    if (total == 7 || total == 11) {
        document.getElementById("diceOutput").innerHTML = "You rolled a " + total + " you win!";
    } else if (total == 2 || total == 3 || total == 12) {
        document.getElementById("diceOutput").innerHTML = "You rolled a " + total + " you lose :(";
    } else {
        document.getElementById("diceOutput").innerHTML = "You rolled a " + total + " roll again";
    }
}
