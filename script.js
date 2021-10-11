let employees = [
  {
    id: 1,
    first_name: "Valaree",
    last_name: "Chin",
    email: "vchin0@diigo.com",
    gender: "Female",
    ip_address: "150.193.177.24",
  },
  {
    id: 2,
    first_name: "Olva",
    last_name: "Ainsbury",
    email: "oainsbury1@merriam-webster.com",
    gender: "Female",
    ip_address: "246.224.50.123",
  },
  {
    id: 3,
    first_name: "Gail",
    last_name: "Evesque",
    email: "gevesque2@smugmug.com",
    gender: "Female",
    ip_address: "233.14.29.117",
  },
  {
    id: 4,
    first_name: "Reeta",
    last_name: "Hanstock",
    email: "rhanstock3@archive.org",
    gender: "Female",
    ip_address: "83.47.171.190",
  },
  {
    id: 5,
    first_name: "Gearard",
    last_name: "Smeeth",
    email: "gsmeeth4@ycombinator.com",
    gender: "Male",
    ip_address: "128.91.65.8",
  },
  {
    id: 6,
    first_name: "Hal",
    last_name: "Giacomello",
    email: "hgiacomello5@intel.com",
    gender: "Male",
    ip_address: "43.247.218.29",
  },
  {
    id: 7,
    first_name: "Derby",
    last_name: "Riddlesden",
    email: "driddlesden6@linkedin.com",
    gender: "Male",
    ip_address: "147.51.104.85",
  },
  {
    id: 8,
    first_name: "Betti",
    last_name: "Josselsohn",
    email: "bjosselsohn7@reddit.com",
    gender: "Female",
    ip_address: "104.159.88.167",
  },
  {
    id: 9,
    first_name: "Christophorus",
    last_name: "Stranks",
    email: "cstranks8@dedecms.com",
    gender: "Male",
    ip_address: "47.248.114.51",
  },
  {
    id: 10,
    first_name: "Dosi",
    last_name: "Boshers",
    email: "dboshers9@tuttocitta.it",
    gender: "Female",
    ip_address: "248.166.167.7",
  },
];

// All Employees
let allEmpButton = document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click", function () {
  displayEmployees(employees);
});

// Male Employees
let maleEmpButton = document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click", function () {
  let maleEmployees = employees.filter(function (employee) {
    return employee.gender === "Male";
  });
  displayEmployees(maleEmployees);
});

// Female Employees
let femaleEmpButton = document.querySelector("#female-emp-btn");
femaleEmpButton.addEventListener("click", function () {
  let femaleEmployees = employees.filter(function (employee) {
    return employee.gender === "Female";
  });
  displayEmployees(femaleEmployees);
});

// Search Employees
let searchBox = document.querySelector("#search-box");
searchBox.addEventListener("keyup", function () {
  let textEntered = searchBox.value;
  let filteredEmployees = [];
  if (textEntered !== "") {
    filteredEmployees = employees.filter(function (employee) {
      return employee.first_name
        .toUpperCase()
        .startsWith(textEntered.toUpperCase());
    });
    document.querySelector("#table-body").innerHTML = "";
    displayEmployees(filteredEmployees);
  } else {
    document.querySelector("#table-body").innerHTML = "";
  }
});

// display Employees
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
                     </tr> \n`;
    tableBody.innerHTML = tableRow;
  }
};
