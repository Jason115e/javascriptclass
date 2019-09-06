


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
    let inputName = inputCreation('input', 'name', 'name', '', '', 'form-control', '', '');
    let inputEmail = inputCreation('input', 'email', 'email', '', '', 'form-control', '', '');
    let textArea = inputCreation('textarea', 'text', 'textarea', '', '', 'form-control', '', '');
    let button = inputCreation('button', 'submit', 'submit', '', '', '', '', 'Submit');
    let formGroupName = inputCreation('div', '', '', '', '', 'form-group', '', '');
    let formGroupEmail = inputCreation('div', '', '', '', '', 'form-group', '', '');
    

    container.appendChild(form);

    form.appendChild(formGroupName);
    
    formGroupName.appendChild(labelCreation('name', 'Name:'));
    formGroupName.appendChild(inputName);


    form.appendChild(formGroupEmail);
    
    formGroupEmail.appendChild(labelCreation('email', 'Email:'));
    formGroupEmail.appendChild(inputEmail);


    formGroupEmail.appendChild(textArea);

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