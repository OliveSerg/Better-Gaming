var bankroll = document.getElementById('bankroll')
var total = 100;
var bet;

document.querySelector("#placebet").addEventListener("click", app);
document.querySelector('#reset').addEventListener('click', reload)

function app(){
  checkForResults()

  var para = document.createElement('P')
  para.id = 'result'
  var result = Math.floor(Math.random(10)*10)+1
  console.log(result);

  var answer = document.getElementById('answer').value
  var bet = parseInt(document.getElementById('bet').value)

  if (answer == result) {
    total += bet
    var text = document.createTextNode("Congratz Your RIGHT!")
  } else if (Math.abs(answer - result) == 1) {
    var text = document.createTextNode("Close but not quite")
  } else {
    total -= bet
    var text = document.createTextNode("Answer was " + result + ". Thanks for the $" + bet + ". Try again next time")
  }

  para.appendChild(text)
  bankroll.innerText = ("Current Bankroll: " + total)
  document.getElementById('app').appendChild(para)
}

function checkForResults(){
  var exists = document.getElementById('result')
  if (exists != null){
    document.getElementById('app').removeChild(exists)
  }
}

function reload(){
  document.location.reload()
}
