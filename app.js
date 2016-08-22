var bankroll = 100;

function app(){
  do {
    var bet = prompt("How much would you like to bet: $5 or $10")
    console.log(bet);
  } while(bet != 5 && bet != 10)
  do {
    var answer = prompt("Choose a Number Between 1-10")
  } while (isNaN(answer) || answer < 1 || answer > 10);

  var result = Math.floor(Math.random(10)*10)+1

  if (answer == result){
    bankroll += bet
    alert("YOUR RIGHT")
  } else {
    bankroll -= bet
    alert("Answer was " + result + " \nThanks for the $" + bet + ". Try again next time!!")
  }
}
