function betButtons(){
  var fiveDoller = document.createElement('BUTTON')
  var text5 = document.createTextNode(5)
  fiveDoller.appendChild(text5)
  fiveDoller.addEventListener("click", function() {
    bet = 5
    addInputField
  })
  fiveDoller.id = "fiveButton"

  var tenDoller = document.createElement('BUTTON')
  var text10 = document.createTextNode(10)
  tenDoller.appendChild(text10)
  tenDoller.addEventListener("click", function() {
    bet = 10
    addInputField
  })
  tenDoller.id = "tenButton"

  var para = document.createElement('P')
  var text = document.createTextNode("How much would you like to bet")
  para.appendChild(text)

  document.getElementById('app').appendChild(para)
  document.getElementById('app').appendChild(fiveDoller)
  document.getElementById('app').appendChild(tenDoller)
}

function addInputField(){

}
// do {
//   var bet = prompt("How much would you like to bet: $5 or $10")
//   console.log(bet);
// } while(bet != 5 && bet != 10)
// do {
//   var answer = prompt("Choose a Number Between 1-10")
// } while (isNaN(answer) || answer < 1 || answer > 10);
//
// if (answer == result){
//   bankroll += bet
//   alert("YOUR RIGHT")
// } else if (Math.abs(answer - result) == 1){
//   alert("Close but not quite")
// } else {
//   bankroll -= bet
//   alert("Answer was " + result + " \nThanks for the $" + bet + ". Try again next time!!")
// }
