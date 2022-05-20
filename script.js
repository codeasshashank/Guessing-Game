let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let count = 20;
let highScore = 0;

function inputValue() {
  let num = document.getElementById("inpt").value;
  if (num > number) {
    document.getElementById("guess").innerHTML = "Too High";
    document.getElementById("wrong").play();
    count = count - 1;
    document.getElementById("bdy").style.backgroundColor = "#FF0000";
    document.getElementById("first").style.backgroundColor = "#FF0000";
    document.getElementById("second").style.backgroundColor = "#FF0000";
    document.getElementById("third").style.backgroundColor = "#FF0000";
    document.getElementById("firstone").style.backgroundColor = "#FF0000";
    document.getElementById("secondone").style.backgroundColor = "#FF0000";
    document.getElementById("secondsone").style.backgroundColor = "#FF0000";
    document.getElementById("secondsone").style.color = "white";

    document.getElementById("twoone").style.backgroundColor = "#FF0000";
    document.getElementById("inpt").style.backgroundColor = "#FF0000";
    document.getElementById("inpt").style.borderColor = "black";
    document.getElementById("inpt").style.color = "white";

    document.getElementById("guess").style.backgroundColor = "#FF0000";
    document.getElementById("guess").style.color = "white";

    document.getElementById("scr").style.backgroundColor = "#FF0000";
    document.getElementById("scr").style.color = "white";

    document.getElementById("btns").style.backgroundColor = "#FF0000";
    document.getElementById("hs").style.backgroundColor = "#FF0000";
    document.getElementById("hs").style.color = "white";

    document.getElementById("firstsone").style.backgroundColor = "#FF0000";
    document.getElementById("firstsone").style.color = "white";
  } else if (num < number) {
    document.getElementById("guess").innerHTML = "Too Low";
    document.getElementById("wrong").play();
    count = count - 1;
    document.getElementById("bdy").style.backgroundColor = "#FF0000";
    document.getElementById("first").style.backgroundColor = "#FF0000";
    document.getElementById("second").style.backgroundColor = "#FF0000";
    document.getElementById("third").style.backgroundColor = "#FF0000";
    document.getElementById("firstone").style.backgroundColor = "#FF0000";
    document.getElementById("secondone").style.backgroundColor = "#FF0000";
    document.getElementById("secondsone").style.backgroundColor = "#FF0000";
    document.getElementById("secondsone").style.color = "white";

    document.getElementById("twoone").style.backgroundColor = "#FF0000";
    document.getElementById("inpt").style.backgroundColor = "#FF0000";
    document.getElementById("inpt").style.borderColor = "black";
    document.getElementById("inpt").style.color = "white";

    document.getElementById("guess").style.backgroundColor = "#FF0000";
    document.getElementById("guess").style.color = "white";

    document.getElementById("scr").style.backgroundColor = "#FF0000";
    document.getElementById("scr").style.color = "white";

    document.getElementById("btns").style.backgroundColor = "#FF0000";
    document.getElementById("hs").style.backgroundColor = "#FF0000";
    document.getElementById("hs").style.color = "white";

    document.getElementById("firstsone").style.backgroundColor = "#FF0000";
    document.getElementById("firstsone").style.color = "white";
  } else {
    document.getElementById("guess").innerHTML = "Number Matched";
    document.getElementById("bdy").style.backgroundColor = "#90EE90";
    document.getElementById("first").style.backgroundColor = "#90EE90";
    document.getElementById("second").style.backgroundColor = "#90EE90";
    document.getElementById("third").style.backgroundColor = "#90EE90";
    document.getElementById("firstone").style.backgroundColor = "#90EE90";
    document.getElementById("secondone").style.backgroundColor = "#90EE90";
    document.getElementById("secondsone").style.backgroundColor = "#90EE90";
    document.getElementById("secondsone").style.color = "black";

    document.getElementById("twoone").style.backgroundColor = "#90EE90";
    document.getElementById("inpt").style.backgroundColor = "#90EE90";
    document.getElementById("inpt").style.borderColor = "black";
    document.getElementById("inpt").style.color = "black";

    document.getElementById("guess").style.backgroundColor = "#90EE90";
    document.getElementById("guess").style.color = "black";

    document.getElementById("scr").style.backgroundColor = "#90EE90";
    document.getElementById("scr").style.color = "black";

    document.getElementById("btns").style.backgroundColor = "#90EE90";
    document.getElementById("hs").style.backgroundColor = "#90EE90";
    document.getElementById("hs").style.color = "black";

    document.getElementById("firstsone").style.backgroundColor = "#90EE90";
    document.getElementById("firstsone").style.color = "black";

    document.getElementById("qm").innerHTML = `${num}`;

    document.getElementById("scr").innerHTML = `Score : ${count}`;
    if (highScore < count) {
      document.getElementById("hs").innerHTML = `HighScore : ${count}`;
    }
    document.getElementById("suc").play();
    // console.log(count);
  }
}
function refresh() {
  window.location.reload(true);
}
