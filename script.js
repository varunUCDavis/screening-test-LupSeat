let addButton = document.querySelector('button') // button to add row to table
let table = document.querySelector('table') // table object
let nameInput = document.querySelector('#name') // value in name section
let emailInput = document.querySelector('#email') // value in emial section
let levelInput = document.querySelector('#level') //value in level section

lastInput = "" // last valid input of cell

// checks if edited name is valid
function checkValidName(element) {
  name = element.innerHTML
  // used code from https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
  // for checking if string contains all alphabetical characters
  // if name has no alphabet characters it is not valid
  if (!(/^[a-zA-Z]+$/.test(name))) {
    element.innerHTML = lastInput // reset field
    alert("A name can only contain letters. Please enter a valid name.")
  }
}

// checks if edited email is valid
function checkValidEmail(element) {
  email = element.innerHTML
  // if email has no @ character it is not valid
  if (email.indexOf('@') == -1) {
    element.innerHTML = lastInput // reset field
    alert("An email must contain an '@'. Please enter a valid email.")
  }
}

// checks if level is valid
function checkValidLevel(element) {
  lev = element.innerHTML
  // if level is not valid
  if(!(lev === "first" || lev === "second" || lev === "third" || lev === "fourth")) {
    element.innerHTML = lastInput // reset field
    alert("Please enter a valid level");
  }
}

// sets lastInput to current element value
function getLast(element) {
  lastInput = element.innerHTML
}

// removes row of table
// used code from https://www.w3schools.com/jsref/met_table_deleterow.asp
function removeRow(r) {
  var i = r.parentNode.parentNode.rowIndex; // get index of row that delete button is in
  document.getElementById("table").deleteRow(i); // remove row
}

// listener for button
addButton.addEventListener('click', () => {
  let name = nameInput.value; // name value in added field
  let email = emailInput.value; // email value in added field
  let level = levelInput.value; // level value in added field
  lev = level.toLowerCase()

  // if name has non alphabet characters its not valid
  // used code from https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
  // for checking if string contains all alphabetical characters
  if (!(/^[a-zA-Z]+$/.test(name))) {
    alert("A name can only contain letters. Please enter a valid name.")
  }
  // if email does not have @ it is not valid
  else if(email.indexOf('@') == -1) {
    alert("An email must contain an '@'. Please enter a valid email.")
  }
  else {

      let row = `
                    <tr>
                        <td><div contenteditable onclick = "getLast(this)" onfocusout="checkValidName(this)">${name}</div></td>
                        <td><div contenteditable onclick = "getLast(this)" onfocusout="checkValidEmail(this)">${email}</div></td>
                        <td><div contenteditable onclick = "getLast(this)" onfocusout="checkValidLevel(this)">${level}</div></td>
                        <td><input type="button" value="Delete" onclick="removeRow(this)"></td>
                    </tr>`;
      table.innerHTML += row // add row to table
  }
})
