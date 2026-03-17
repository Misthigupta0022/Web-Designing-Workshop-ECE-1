let employees = [];

// Add Employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    if (name === "" || id === "" || isNaN(salary) || department === "") {
        alert("Please fill all fields correctly!");
        return;
    }

    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(employee);
    alert("Employee Added!");

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

// Display All Employees
function displayEmployees() {
    let output = "<h3>All Employees:</h3>";

    for (let emp of employees) {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Dept: ${emp.department} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Filter Salary > 50000
function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Employees with Salary > ₹50000:</h3>";

    for (let emp of filtered) {
        output += `Name: ${emp.name}, Salary: ₹${emp.salary} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Total Salary
function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        "<h3>Total Salary: ₹" + total + "</h3>";
}

// Average Salary
function averageSalary() {
    if (employees.length === 0) return;

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

// Count by Department
function countDepartment() {
    let dept = prompt("Enter department name:");

    let count = 0;

    for (let emp of employees) {
        if (emp.department.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        `<h3>Employees in ${dept}: ${count}</h3>`;
}