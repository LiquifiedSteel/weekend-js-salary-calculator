

let monthlyExpenses = 0; // will be used to track the monthly expenses on employees



function collectInfo(event) {
    event.preventDefault();

    // first we grab references to each of the input fields
    const firstNameElement = document.getElementById('firstNameInput');
    const lastNameElement = document.getElementById('lastNameInput');
    const idElement = document.getElementById('idInput');
    const titleElement = document.getElementById('titleInput');
    const salaryElement = document.getElementById('salaryInput');

    // here we create each row of the table using the inputs from before as well as adding a delete button
    document.getElementById("employeeTable").innerHTML += `
    <tr id="employeeRow">
        <td>
            ${firstNameElement.value}
        </td>
        <td>
            ${lastNameElement.value}
        </td>
        <td>
            ${idElement.value}
        </td>
        <td>
            ${titleElement.value}
        </td>
        <td>
            $<span id="salary">${salaryElement.value}<span>
        </td>
        <td>
            <button onclick="removeEmployee(event)">❌</button>
        </td>
    </tr>
    `;

    monthlyExpenses += salaryElement.value / 12;
    renderMonthlyExpense();

    // here we reset the input fields
    firstNameElement.value = ``;
    lastNameElement.value = ``;
    idElement.value = ``;
    titleElement.value = ``;
    salaryElement.value = ``;
}

function removeEmployee(event) {
    const grabElement = event.target.closest("tr");
    monthlyExpenses -= document.getElementById("salary").firstChild.nodeValue / 12;
    renderMonthlyExpense();
    grabElement.remove();

   
}
function renderMonthlyExpense() {
    const expenseElement = document.getElementById("monthly");

    monthlyExpenses = Math.round(monthlyExpenses * 100);
    monthlyExpenses /= 100;
    
    expenseElement.innerHTML = ` $${monthlyExpenses}`;

    
}