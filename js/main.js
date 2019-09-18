let button = document.createElement("button");
let cancelbutton = document.createElement("button");
let body = document.getElementById("main");
body.appendChild(button);
body.appendChild(cancelbutton);
button.innerText = "START";
button.setAttribute("class", "btn btn-primarr");
button.setAttribute("onclick", `startNow()`);
cancelbutton.innerText = "END";
cancelbutton.setAttribute("class", "btn btn-primar");
cancelbutton.setAttribute("onclick", `endNow()`);
let timer;

function endNow() {
  let getName = prompt("Are you sure you wish to cancel, if so please enter your name?");
  body.innerText = `SORRY ${getName.toUpperCase()}, YOU ARE TOO FAR IN, BACK YOU GO!!!`;
  body.style.fontSize = "2em";
  timer = setTimeout(delayAlert, 5000);
}

function delayAlert() {
  location.reload();
};

function startNow() {
  body.innerText = "WELL THEN, I WANT TO PLAY A GAME";
  body.setAttribute("class", "scarry");
  body.style.fontSize = "2em";
  timer = setTimeout(slide1, 3000);
}

function slide1() {
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  let button3 = document.createElement("button");
  body.innerText = "WHO HAS A SWEATER AND GETS YOU WHILE YOU SLEEP ";
  body.style.fontSize = "2.5em";
  body.appendChild(button1);
  body.appendChild(button2);
  body.appendChild(button3);
  button1.innerText = "FREDDY";
  button2.innerText = "CHUCKY";
  button3.innerText = "BATMAN";
  button1.setAttribute("class", "btn btn-primar");
  button2.setAttribute("class", "btn btn-primar");
  button3.setAttribute("class", "btn btn-primar");
  button1.addEventListener('click', function () {
    body.innerText = "CORRECT"
    body.setAttribute("class", "freddy");
    timer = setTimeout(transitionSlide, 4000);
  })
  button2.addEventListener('click', function () {
    body.innerText = "CORRECT";
    body.setAttribute("class", "chucky");
    timer = setTimeout(transitionSlide, 4000);
  })
  button3.addEventListener('click', function () {
    body.innerText = "NO, NOW YOU GO ALL THE WAY BACK";
    body.setAttribute("class", "batman");
    timer = setTimeout(delayAlert, 5000);
  })
}

function transitionSlide() {
  body.innerText = "NEXT QUESTION!!"
  body.setAttribute("class", "normalbg");
  timer = setTimeout(slide2, 3000);
}

function slide2() {
  let button4 = document.createElement("button");
  let button5 = document.createElement("button");
  let button6 = document.createElement("button");
  body.style.fontSize = "1.5em";
  button4.innerText = "KANYE WEST";
  button5.innerText = "LIL NAS X";
  button6.innerText = "PENNYWISE";
  body.innerText = "WHO SAY'S Hiya, Georgie!";
  button4.setAttribute("class", "btn btn-primar");
  button5.setAttribute("class", "btn btn-primar");
  button6.setAttribute("class", "btn btn-primar");
  body.appendChild(button4);
  body.appendChild(button5);
  body.appendChild(button6);
  button4.addEventListener('click', function () {
    body.innerText = "SORRY, YOU ARE WRONG. BACK YOU GO";
    body.setAttribute("class", "kayne");
    timer = setTimeout(delayAlert, 8000);
  })
  button5.addEventListener('click', function () {
    body.innerText = "SORRY, YOU ARE WRONG. BACK YOU GO";
    body.setAttribute("class", "lilnas");
    body.style.color="red";
    timer = setTimeout(delayAlert, 10000);
  })
  button6.addEventListener('click', function () {
    body.innerText = "CORRECT";
    body.setAttribute("class", "pennywise");
    timer = setTimeout(transitionSlide1, 5000);
  })
}


function transitionSlide1(){

  body.innerText = "NOW TRY AND GET A GOOD NIGHTS REST";
  timer = setTimeout(slide3, 5000);


}

