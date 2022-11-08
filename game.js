var word = document.querySelector(".word");
var time = document.querySelector(".time");
let second = 30;
var input = document.querySelector(".input-text");
const reset = document.querySelector(".refresh-btn");
const submit = document.querySelector(".submit-btn");

function scrambledword() {
  let words = [
    "juliana",
    " variable",
    " constante",
    "DOM",
    "asincronismo",
    "API",
    "METODO",
    "OBEJTO",
  ];

  var wordobtain = words[Math.floor(Math.random() * words.length)];

  let RamdomWordString = wordobtain.split("");

  function shuffleArray(array) {
    for (var i = RamdomWordString.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
  function show() {
    var scrambledword = shuffleArray(RamdomWordString);

    word.innerHTML = scrambledword.join("");
  }
  show();

  time.innerHTML = `TIME LEFT: ${second}s`;

  const countdown = setInterval(() => {
    second--;
    time.innerHTML = `TIME LEFT: ${second}s`;

    submit.addEventListener("click", () => {
      var x = input.value;
      if (x == "") {
        alert("Please Enter Something");
        countdown();
      } else if (x == wordobtain) {
        wordobtain != x;
        alert("You Find Correct Word");
        document.location.reload();
        scrambledword();
      }
    });

    if (second === 0) {
      clearInterval(countdown);
      alert("Your Time Is Over");
      document.location.reload();
    }
  }, 1000);
}

window.addEventListener("load", scrambledword);
reset.addEventListener("click", () => {
  scrambledword();
  document.location.reload();
});
