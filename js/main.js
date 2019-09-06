


function superAwesomeFunction() {
   
  
    
    

    formCreation();
    labelCreation();

    let removeItem = document.getElementById('startButton');
    removeItem.classList.add('hidden');


}
//<input type="" name="" class="" placeholder="" / elementInnerText for Button>
function formCreation() {
    let container = document.getElementById('container');
    let form = inputCreation('form', '', 'formName', 'GET', 'js/formSubmission.js', 'inputform', '', '');
    let inputName = inputCreation('input', 'name', 'name', '', '', '', '', '');
    let inputEmail = inputCreation('input', 'email', 'email', '', '', '', '', '');
    let button = inputCreation('button', 'submit', 'submit', '', '', '', '', 'Submit Entry');
    

    container.appendChild(form);
    
    form.appendChild(labelCreation('name', 'Name:'));
    form.appendChild(inputName);
    
    form.appendChild(labelCreation('email', 'Email:'));
    form.appendChild(inputEmail);
    form.appendChild(button);


    
}
//<label for=""></label>
function labelCreation(elementName, elementInfo) {
    let label = document.createElement('label');
    label.setAttribute('for', elementName);
    label.innerText = elementInfo;
    return label;
}

function inputCreation(elementTag, elemetType, elementName, elementMethod = '', elementAction, elementClass, elementPlaceholder, elementInnerText = '') {
    const elementInput = document.createElement(elementTag);
    elementInput.setAttribute('type', elemetType);
    elementInput.setAttribute('name', elementName);
    elementInput.setAttribute('method', elementMethod);
    elementInput.setAttribute('action', elementAction);
    elementInput.setAttribute('class', elementClass);
    elementInput.setAttribute('placeholder', elementPlaceholder);
    elementInput.innerText = elementInnerText;
    return elementInput;
}