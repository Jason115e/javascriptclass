const h1 = document.getElementById('greeting');
const myList = document.getElementById('groceryList');

const myInput = document.getElementById('getGroceryItem');

h1.innerHTML = "Jason's Grocery List";

//Start with a blank array
let allGroceryItems = [];



//document is listening to the click button
function addToList() {

    //if the textbox is not empty then do the following
    if (!myInput.value == "") {






        allGroceryItems.push(myInput.value);

        for (i = 0; i < allGroceryItems.length; i++) {


            let listItem = document.getElementById(`groceryItem${i+1}`);
            listItem.innerHTML = `# ${i+1}: ${allGroceryItems[i]}`;




        }






        //clear form textbox
        myInput.value = "";

    } else {

        //if the textbox is empty then do the following = clear the box.


        //clear form textbox
        myInput.value = "";
    }

}