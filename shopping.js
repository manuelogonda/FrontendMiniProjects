const addShoppingBtn = document.getElementById("addShopping");
const showUpShopping = document.getElementById("showTheShoppingMade");

    let myShoppingList = [];
     addShoppingBtn.addEventListener('click', (e)=> {
        const shoppingName = document.getElementById("shoppingName").value.trim();
        const shoppingItemCategory = document.getElementById("shoppingCategory").value.trim();
        const theShoppingList = document.getElementById("shoppingList").value.trim();

        const anotherShoppingList = {shoppingName, shoppingItemCategory, theShoppingList};
        myShoppingList.push(anotherShoppingList);

        addShoppingList();
     });
     
     
     function addShoppingList() {
        showUpShopping.innerHTML = "";
        myShoppingList.forEach((element, index) =>{
        const shoppingContentArea = document.createElement("div");
        shoppingContentArea.className = "display-shopping-list";
        shoppingContentArea.innerHTML = `
        <pre><strong>Shopping Name:</strong><br>${element.shoppingName}</pre>
        <pre><strong>Category of Shopping:</strong> <br>${element.shoppingItemCategory}</pre>
        <pre><strong>Write down the shopping list:</strong> <br>${element.theShoppingList}</pre>
        <button type="button" onclick = "deleteShopping(${index})">Delete shopping</button>
        
        `;
        showUpShopping.appendChild(shoppingContentArea);

        })
        

     };

     function deleteShopping(index){
        myShoppingList.splice(index, 1);
        addShoppingList()
     }; 


          