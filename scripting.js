










function collectInfo(event) {
    event.preventDefault();
    const firstNameElement = document.getElementById('firstNameInput');
    const lastNameElement = document.getElementById('lastNameInput');
    const idElement = document.getElementById('idInput');
    const titleElement = document.getElementById('titleInput');
    const salaryElement = document.getElementById('salaryInput');

    document.getElementById("affirmationTable").innerHTML += `
    <tr>
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
            $${salaryElement.value}
        </td>
        <td>
            <button class="hover" onclick="deleteElement(event)">❌</button>
        </td>
    </tr>
    `

    firstNameElement.value = ``;
    lastNameElement.value = ``;
    idElement.value = ``;
    titleElement.value = ``;
    salaryElement.value = ``;
}