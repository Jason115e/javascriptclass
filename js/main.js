const body = document.body;
const container = document.createElement('div');
container.className = "container text-center";

// let test = body.appendChild(container);
// console.log(test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');
content.className="content col-md-6 col-md-offset-2";




const form = document.createElement('form');
form.setAttribute('name', 'myForm');
form.setAttribute('method', 'GET');
form.setAttribute('action', 'js/form-submission.js');


const inputEmail = document.createElement('input');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('placeholder', 'Email');


const inputSubject = document.createElement('input');
inputSubject.setAttribute('name', 'subject');
inputSubject.setAttribute('type', 'text');
inputSubject.setAttribute('placeholder', 'Subject');


const inputTextArea = document.createElement('textarea');
inputTextArea.setAttribute('type', 'text');

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = "SUBMIT";



body.appendChild(container);
container.appendChild(row);
row.appendChild(content);
content.appendChild(form);
form.appendChild(inputEmail);
form.appendChild(inputSubject);
form.appendChild(inputTextArea);
form.appendChild(submitButton);


// function globalFormElements(element,elementType,elementName,elementClass, elementPlaceholder){

// const newElement = document.createElement(element);
// newElement.setAttribute('type', elementType);
// newElement.className = elementClass;
// newElement.setAttribute('name', elementName);
// newElement.setAttribute('placeholder', elementPlaceholder);
// newElement.id = elementID
// return newElement;



// }

// const textAreaElement = (name, placeholder, elementClass) => {

// const element = document.createElement('textarea');
// element.setAttribute('type', 'text');
// element.className = elementClass;
// element.setAttribute('name', name);
// element.setAttribute('placeholder', placeholder);
// element.setAttribute('cols', cols);
// element.setAttribute('rows', rows);
// element.id = elementID;
// return element;
// }

// console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your Example here'));


// console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please let us your concerns'));


// const labelGenerator (forElement, text)=>{

//    const label = document.createElement('label');
//    label.setAttribute('for', forElement);
//    label.innerText = text;
//    return label;



// }
