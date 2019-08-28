const h1 = document.getElementById('greeting');
const myList = document.getElementById('groceryList');

const myInput = document.getElementById('getGroceryItem');

h1.innerHTML = "Jason Grocery List";

//Start with a blank array
let allGroceryItems = [];



//document is listening to the click button
function addToList() {


    if (!myInput.value == "") {


        
  
      
       
        allGroceryItems.push(myInput.value);

        for(i=0; i < allGroceryItems.length; i++){

            
            let listItem = document.getElementById(`groceryItem${i+1}`);
            listItem.innerHTML = allGroceryItems[i];

      
         

        }
   





        //clear form textbox
        myInput.value = "";

    } else {




        //clear form textbox
        myInput.value = "";
    }



}
