// let container = document.getElementById("container");
// let dogArea = document.createElement("img");




// function playWithApi(){
// const url = "https://dog.ceo/api/breed/hound/images";
// fetch(url);
// console.log(url);

// container.appendChild(dogArea);
// dogArea.setAttribute("href", url)

// }

// playWithApi();


// const exampleJson = '{"name": "Jason", "age": 26}';
// const exampleTwo = '{"ramdom": 7, "phrase": "This is suppa cool"}';

// const exampleParse = JSON.parse(exampleTwo);
// const exampleStrigify = JSON.stringify(exampleTwo);

// container.innerText = exampleParse.ramdom;





// console.log(exampleStrigify);



// function practiceScope(){

//     let random = "inside scope";

//     const phrase = function (){

// console.log("This is super cool");


 
        
//     }

//     return phrase();
// }


// let practiceOutside = practiceScope();




let container = document.getElementById("container");
let dogArea = document.createElement("img");




class AboutMe {
    constructor(name, age, petName, petBreed){

this.name = name;
this.age =  age;
this.petName = petName;
this.petBreed = petBreed;

    }




}

const jason = new AboutMe("Jason", 32, "Mickey", "chihuahua");



AboutMe.prototype{
console.log(this.petBreed);


}





function playWithApi(){



const url = `https://dog.ceo/api/breed/${this.petBreed}/images/random`;
fetch(url);
console.log(url);


container.appendChild(dogArea);
dogArea.setAttribute("src", url);


}

playWithApi();