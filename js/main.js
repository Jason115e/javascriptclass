// const h1 = document.querySelector('h1');

// console.log(h1.textContent);

// let messageOne = h1.innerHTML = "I am a new message"
// console.log();


// const container = document.getElementById('contain');
// console.log(container);



// function globalListItems(){

//ul, ol li classes or attributes or Id's

// const ul = document.createElement('ul')
// console.log(`unordered list`, ul);

//create list item

// const li = document.createElement('li');
// console.log(`list item`, li);

//attribute classes or Ids

// li.className = `list-group list-group-item-info`;
// console.log(`li with classes`, li);

// li.className = 'list-group-item list-group-item-info'
// li.innerHTML = "I am a list Item";
// li.id= 'mySpecialListItem';


// const image = document.createElement('img');
// image.setAttribute('class', `img-responce`);
// console.log(image);


// ul.appendChild(li);

// console.log(`complete ul`, ul);


// container.appendChild(ul);







// }

// globalListItems();



function cardHTML(){

    const container = document.querySelector('.container');
    const divMain = document.createElement('div');
    const divTwo = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const i = document.createElement('i');
    const a = document.createElement('a');
    
   


    container.appendChild(divMain);
    divMain.className= "card text-center col-md-6";

    divMain.appendChild(divTwo);
    divTwo.className= "col-md-4";



    divTwo.appendChild(h1);
    divTwo.appendChild(img);
    divTwo.appendChild(p);
    divTwo.appendChild(i);
    i.appendChild(a);



    img.setAttribute('src','https://images.unsplash.com/photo-1567446732195-14ae4baec622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60');
    img.setAttribute('alt','Fishy');
    img.setAttribute('class','img-responsive');
    img.setAttribute('class','col-md-4');
    // img.className='img-responsive';

    i.setAttribute('class','fab fa-facebook');


    h1.innerHTML = "MASTER FISH ";
    p.innerHTML = "FISHY FISHY FISHY FISHY FISHY FISHY FISHY FISHY ";
   

    a.setAttribute('href','')




    


    

 
    




}

cardHTML();
