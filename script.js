//selecting Dom button Elements
const btn_submit = document.querySelector("#submit");
const btn_reset = document.querySelector("#reset");
const form = document.querySelector("#form");
const table = document.querySelector("table");

//select Table body
const tbody = document.querySelector("#tbody");

// Selecting input boxes
const firstname = document.querySelector("#FirstName");
const lastname = document.querySelector("#LastName");
const gender = document.querySelector("#Gender");
const food = document.querySelectorAll(".Checkbox");
const pincode = document.querySelector("#Pincode");
const address = document.querySelector("#Address");
const state = document.querySelector("#State");
const country = document.querySelector("#Country");

//Array to store all objects created
let rowArray = [];
//state and element where we have to Edit
let editing = false;
let editElement;
console.log(gender);
//Class table to store the row data in object
class Table {
  constructor(
    firstname,
    lastname,
    address,
    pincode,
    gender,
    checkedFood,
    state,
    country
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = this.count;
    this.address = address;
    this.pincode = pincode;
    this.gender = gender;
    this.checkedFood = checkedFood;
    this.state = state;
    this.country = country;
  }
}

// function to update the table as per elements present in the array
function updateTable() {
  let html = "";
  let count = 0;
  rowArray.forEach(function (element) {
    const currentElement = element;
    currentElement.id = count;
    html += `<tr id=${currentElement.id}>
  <td>${currentElement.firstname}</td>
  <td>${currentElement.lastname}</td>
   <td>${currentElement.address}</td>
   <td>${currentElement.pincode}</td>
   <td>${currentElement.gender}</td>
   <td>${currentElement.checkedFood}</td>
   <td>${currentElement.state}</td>
   <td>${currentElement.country}</td>
</tr>`;
    count++;
  });
  tbody.innerHTML = html;
  setLocal(); //calling local storage
}
//Element that changes after clicking edit
function changeElement(element, checkedFood) {
  element.firstname = firstname.value;
  element.lastname = lastname.value;
  element.address = address.value;
  element.pincode = pincode.value;
  element.gender = gender.value;
  element.checkedFood = checkedFood;
  element.state = state.value;
  element.country = country.value;
  editing = false;
}

//create new element or call function to update exsiting element
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //Array to store choice of food
  const checkedFood = [];
  food.forEach(function (el) {
    if (el.checked == true) {
      checkedFood.push(el.value);
    }
  });
  if (checkedFood.length < 2) {
    alert("Select at least two food items");
    return;
  }
  console.log(checkedFood);
  if (!editing) {
    const row = new Table(
      firstname.value,
      lastname.value,
      address.value,
      pincode.value,
      gender.value,
      checkedFood,
      state.value,
      country.value
    );
    rowArray.push(row);
  } else changeElement(editElement, checkedFood);
  firstname.value =
    lastname.value =
    address.value =
    pincode.value =
    state.value =
    country.value =
      "";
  gender.value = "";
  food.forEach((el) => (el.checked = false));
  updateTable();
});

//set local Storage
function setLocal() {
  localStorage.setItem("table", JSON.stringify(rowArray));
}
//Array to get back Elements from Local
let localArray = JSON.parse(localStorage.getItem("table"));
if (localArray) {
  rowArray = localArray;
  updateTable();
}
//reset Local Storage
function reset() {
  localStorage.removeItem("table");
  location.reload();
}
//add event Listener to reset button
btn_reset.addEventListener("click", reset);
