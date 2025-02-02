let editingRow = null; // Variable to track the row being edited

document.getElementById("budget-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    let type = document.getElementById("type").value;
    let date = document.getElementById("date").value;

    if (editingRow) {
        // If editing, update the row instead of adding a new one
        editingRow.cells[0].textContent = category;
        editingRow.cells[1].textContent = amount;
        editingRow.cells[2].textContent = date;
        editingRow.cells[3].textContent = type;
        editingRow = null; // Reset editing state
    } else {
        // Insert a new row
        let table = document.getElementById("budget-table");
        let newRow = table.insertRow();
        
        newRow.innerHTML = `
            <td>${category}</td>
            <td>${amount}</td>
            <td>${description}</td>
            <td>${date}</td>
            <td>${type}</td>
            <td>
                <button class="edit-btn" onclick="editEntry(this)">Edit</button>
                <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
            </td>
        `;
    }

    // Clear the form
    document.getElementById("budget-form").reset();
});

function deleteEntry(button) {
    let row = button.parentElement.parentElement; // Get the row containing the button
    row.remove(); // Remove the row from the table
}

function editEntry(button) {
    let row = button.parentElement.parentElement; // Get the row containing the button
    
    // Populate the form with existing values
    document.getElementById("category").value = row.cells[0].textContent;
    document.getElementById("amount").value = row.cells[1].textContent;
    document.getElementById("description").value = row.cells[2].textContent;
    document.getElementById("date").value = row.cells[3].textContent;
    document.getElementById("type").value = row.cells[4].textContent;

    editingRow = row; // Store the row being edited
}