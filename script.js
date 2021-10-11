let employees = [
  {
    id: 1,
    first_name: "Sourav",
    last_name: "Paul",
    email: "Sourav@gmail.com",
    gender: "Male",
    ip_address: "160.192.178.21",
  },

  {
    id: 2,
    first_name: "Pavan",
    last_name: "Bhosle",
    email: "pavan@gmail.com",
    gender: "Male",
    ip_address: "160.192.177.22",
  },

  {
    id: 3,
    first_name: "Tushar",
    last_name: "Mali",
    email: "Tushar@gmail.com",
    gender: "Male",
    ip_address: "160.192.178.21",
  },

  {
    id: 4,
    first_name: "Sangeetha",
    last_name: "Paul",
    email: "sangeetha@gmail.com",
    gender: "Female",
    ip_address: "170.192.178.21",
  },

  {
    id: 5,
    first_name: "Pavni",
    last_name: "Dhillon",
    email: "pavni@gmail.com",
    gender: "Female",
    ip_address: "190.172.158.21",
  },

  {
    id: 6,
    first_name: "Ramya",
    last_name: "Maram",
    email: "Ramya@gmail.com",
    gender: "Female",
    ip_address: "190.182.158.21",
  },
];

//All the employees
let allEmpButton = document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click", function () {
  displayEmployees(employees);
});

//To get Male employee data

let maleEmpButton = document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click", function () {
  let maleEmployee = employees.filter(function (employee) {
    return employee.gender === "Male";
  });
  displayEmployees(maleEmployee); //calling function
});

let femaleEmpButton = document.querySelector("#female-emp-btn");
femaleEmpButton.addEventListener("click", function () {
  let femaleEmployee = employees.filter(function (employee) {
    return employee.gender === "Female";
  });
  displayEmployees(femaleEmployee); //calling function
});

//TO get the Female EMployee data

//Searching functionality
let searchBox = document.querySelector("#search-box");
searchBox.addEventListener("keyup", function () {
  let textEntered = searchBox.value;
  //   console.log(textEntered);
  let filteredEmployees = [];
  if (textEntered !== "") {
    filteredEmployees = employees.filter(function (employee) {
      return employee.first_name
        .toUpperCase()
        .startsWith(textEntered.toUpperCase());
    });
    // console.log(filteredEmployees);
    document.querySelector("#table-body").innerHTML = "";
    displayEmployees(filteredEmployees);
  } else {
    document.querySelector("#table-body").innerHTML = "";
  }
});

//displaying the data

let displayEmployees = (employees) => {
  let tableBody = document.querySelector("#table-body");
  let tableRow = "";
  for (let employee of employees) {
    tableRow += `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.first_name}</td>
                    <td>${employee.last_name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.ip_address}</td>
      
      </tr>\n `;
    tableBody.innerHTML = tableRow;
  }
};
