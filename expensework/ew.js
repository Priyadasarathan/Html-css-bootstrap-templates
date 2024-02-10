
// Initial Data 
let tableEntries = [];
//update balance and income , expense
function updateSummary() {
    let totalIncome = tableEntries.reduce((t, e) => {
        if (e.type === 1) t += e.amount;
        return t;
    }, 0);
    let totalExpense = tableEntries.reduce((ex, e) => {
        if (e.type === 0) ex += e.amount;
        return ex;
    }, 0);
    updatedInc.innerText = totalIncome;
    updatedExp.innerText = totalExpense;
    updatedBal.innerText = totalIncome - totalExpense;
}

// add item function
function addItem() {
    let type = itemType.value;
    let name = document.getElementById("name");
    let amount = document.getElementById("amount");
    //validation 
    if (name.value === "" || Number(amount.value) === 0)
        return alert("Incorrect Input");
    if (Number(amount.value) <= 0)
        return alert(
            "Incorrect amount! can't add negative"
        );

    // Push the data into the array list 
    tableEntries.push({
        type: Number(type),
        name: name.value,
        amount: Number(amount.value),
    });
    updateTable();
    name.value = "";
    amount.value = 0;
};

// add the new information in table
function loadItems(e, i) {
    let cls;
    let table = document.getElementById("table");
    let row = table.insertRow(i + 1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let c3 = row.insertCell(3);
    let c4 = row.insertCell(4);
    cell0.innerHTML = i + 1;
    cell1.innerHTML = e.name;
    cell2.innerHTML = e.amount;
    c4.innerHTML = "delete";
    c4.classList.add("zoom");
    c4.addEventListener("click", () => del(e));
    if (e.type == 0) {
        cls = "black";
        c3.innerHTML = "down";
    } else {
        cls = "black";
        c3.innerHTML = "up";
    }
    c3.style.color = cls;
}
// Clear the table before updation 
function remove() {
    while (table.rows.length > 1) table.deleteRow(-1);
}

// Function to delete a specific entry 
function del(el) {
    remove();
    tableEntries = tableEntries.filter(
        (e) => e.name !== el.name
    );
    tableEntries.map((e, i) => loadItems(e, i));
    updateSummary();
}
// To render all entries 
function updateTable() {
    remove();
    tableEntries.map((e, i) => {
        loadItems(e, i);
    });
    updateSummary();
}
updateTable();

