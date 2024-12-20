
function addNewStakeholder(){

const form = document.querySelector('#listOfStakeholders'); // Select the target section

// Create the first <div> for stakeholder name
const nameDiv = document.createElement('div');
const nameLabel = document.createElement('label');
nameLabel.setAttribute('for', 'stakeholder-name');
nameLabel.textContent = "Name of Stakeholder:";
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'stakeholder-name');
nameInput.setAttribute('name', 'stakeholder-name');
nameInput.setAttribute('placeholder', "Enter stakeholder's name");
nameInput.setAttribute('required', '');
nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);

// Create the second <div> for stakeholder department
const departmentDiv = document.createElement('div');
const departmentLabel = document.createElement('label');
departmentLabel.setAttribute('for', 'stakeholder-department');
departmentLabel.textContent = "Department:";
const departmentInput = document.createElement('input');
departmentInput.setAttribute('type', 'text');
departmentInput.setAttribute('id', 'stakeholder-department');
departmentInput.setAttribute('name', 'stakeholder-department');
departmentInput.setAttribute('placeholder', "Enter stakeholder's department");
departmentInput.setAttribute('required', '');
departmentDiv.appendChild(departmentLabel);
departmentDiv.appendChild(departmentInput);

// Create the third <div> for role
const roleDiv = document.createElement('div');

// Create the <label> element
const roleLabel = document.createElement('label');
roleLabel.setAttribute('for', 'stakeholder-role');
roleLabel.textContent = "Role:";

// Create the <select> element
const roleSelect = document.createElement('select');
roleSelect.setAttribute('id', 'stakeholder-role');
roleSelect.setAttribute('name', 'stakeholder-role');
roleSelect.setAttribute('required', '');

// Create the <option> elements
const option1 = document.createElement('option');
option1.setAttribute('value', '');
option1.textContent = "Select Role";

const option2 = document.createElement('option');
option2.setAttribute('value', 'beneficiary');
option2.textContent = "Beneficiary";

const option3 = document.createElement('option');
option3.setAttribute('value', 'external-consultant');
option3.textContent = "External Consultant";

const option4 = document.createElement('option');
option4.setAttribute('value', 'delivery-team');
option4.textContent = "Delivery Team";

const option5 = document.createElement('option');
option5.setAttribute('value', 'other');
option5.textContent = "Other";

// Append the <option> elements to the <select>
roleSelect.appendChild(option1);
roleSelect.appendChild(option2);
roleSelect.appendChild(option3);
roleSelect.appendChild(option4);
roleSelect.appendChild(option5);

// Append the <label> and <select> to the <div>
roleDiv.appendChild(roleLabel);
roleDiv.appendChild(roleSelect);


// Append three <div> elements to the form
form.appendChild(nameDiv);
form.appendChild(departmentDiv);
form.appendChild(roleDiv);
}

const addButton = document.querySelector('#addStakeholderButton'); // Select the Add Stakeholder button
addButton.addEventListener('click', addNewStakeholder); // Add the event listener for the click event
