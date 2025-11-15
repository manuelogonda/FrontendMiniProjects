const addBtn = document.getElementById("AddExpence");
const expenceDisplayArea = document.getElementById("displaExpences");
const totalAmount = document.getElementById("totalAmount");
const expenceSearch = document.getElementById("expenceSearch");

//JSON.parse converts json string to an object
let expencesMade = JSON.parse(localStorage.getItem("expencesMade")) || [];

revealExpences();
calculateTotal(); 

//add eventListener to the button
addBtn.addEventListener('click', (e) =>{
const expenceName = document.getElementById("expenceName").value.trim();
const expenceAmount = Number(document.getElementById("expenceAmount").value.trim());
const expenceDate = document.getElementById("expenceDate").value.trim();

const anotherExpence = {expenceName, expenceAmount, expenceDate};
expencesMade.unshift(anotherExpence);

localStorage.setItem("expencesMade", JSON.stringify(expencesMade));

document.getElementById("expenceName").value = "";
document.getElementById("expenceAmount").value = "";
document.getElementById("expenceDate").value ="";
   
  revealExpences();
  calculateTotal();
});


//to search the expences ,add eventlistener (input) on the 
// Search bar then call the function that reveals the inputs on button click
expenceSearch.addEventListener('input', revealExpences);

//To display the expences once a button is clicked
function revealExpences() {
    expenceDisplayArea.innerHTML = "";
    //for searching 
    const searchedTerm = expenceSearch.value.toLowerCase();
    expencesMade.forEach((element,index) => {
      //validate searching expence
      if(!element.expenceName.toLowerCase().includes(searchedTerm)) return;

        const expenceContainer = document.createElement("div");
        expenceContainer.className = "expence-Container-style";
        expenceContainer.innerHTML = `
        <h3>This is an Expence Made on;</h3>
        <pre><strong>Expence Name:</strong><span id="editName-${index}">${element.expenceName}</span></pre>
        <pre><strong>Amount:</strong><span id="editAmount-${index}">${element.expenceAmount}</span></pre>
        <pre><strong>Date:</strong>${element.expenceDate}</pre>
        <button onclick="deleteExpence(${index})">Delete Expence</button>

        <button onclick="editExpence(${index})">Edit Expence</button>

        <div id="editArea-${index}" style="display:none;">
        <input type="text" id="editName-${index}" value="${element.expenceName}">
        <input type="text" id="editAmount-${index}" value="${element.expenceAmount}">
        <button onclick="saveEdit(${index})">saveEdited Expence</button>
        </div>
        `;
        expenceDisplayArea.appendChild(expenceContainer);

    });
};


//Do away with an Expence
function deleteExpence(index) {
    expencesMade.splice(index, 1);
    //JSON.stringify converts an array to string for storage bcz local storage only stores strings
    localStorage.setItem("expencesMade", JSON.stringify(expencesMade));
    revealExpences();
    calculateTotal();
};


//to start editing the expences
function editExpence(index){
  document.getElementById(`editArea-${index}`).style.display = "block";
};


//to save eddits made on an expence
function saveEdit(index){
const editedName = document.getElementById(`editName-${index}`).value.trim();
const editedAmount = Number(document.getElementById(`editName-${index}`).value.trim());
//if nor editedAmount or editedName do nothing
if(!editedName || !editedAmount)return;
expencesMade[index].expenceName = editedName;
expencesMade[index].expenceAmount = editedAmount;

    localStorage.setItem("expencesMade", JSON.stringify(expencesMade));
  revealExpences();
  calculateTotal();
};


//total expences
function calculateTotal() {
let total = 0;
  for (let i = 0; i < expencesMade.length; i++){
    total += expencesMade[i].expenceAmount;

  };
  totalAmount.textContent = total; 
};
