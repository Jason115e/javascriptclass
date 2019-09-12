


const container = document.createElement('main');
container.classList.add('container');

document.body.appendChild(container);
console.log(container);


let timer;

function movieQuote(){

    alert("I'll be back");
}




function callQuote(){
    
// timer = setInterval(movieQuote, 5000);


console.log('Triggered');




}

function stopQuote(){
    clearInterval(timer, 1000);
    console.log('Stoped Triggered');
    
    }




const button = document.createElement('button');
const buttonstp = document.createElement('button');


// Better to put in a click function
button.setAttribute(`onclick`, `callQuote()`);
button.innerText = "CLICK HERE";

buttonstp.setAttribute(`onclick`, `stopQuote()`);
buttonstp.innerText = "STOP";


container.appendChild(button);


button.addEventListener('click', () =>{

container.appendChild(buttonstp);


});

sessionStorage.setItem('TEMPORARY', "Every Problem is temporary");
sessionStorage.getItem('TEMPORARY');

localStorage.setItem("DEATH", "Except for death");
localStorage.getItem("DEATH");


