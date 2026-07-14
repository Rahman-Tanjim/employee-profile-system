console.log("=========================================");
console.log("       EMPLOYEE PROFILE SYSTEM");
console.log("=========================================");



//===============================
// Employee Basic Information 
// ==============================

const employeeName = "Alex Johnson";
const position = "Frontend Developer";
const company = "TechNova Inc";
const country = "Bangladesh";
const age = 27;
const salary = 350000;
const experience = "2 Years";


console.log(employeeName);
console.log(position);
console.log(company);
console.log(country);
console.log(age);
console.log(salary);
console.log(experience);

const employee = {
    employeeName,
    position,
    company,
    country,
    age,
    salary,
    experience, 
};
console.log(" ");
console.log("========================================");



console.log(employee);

console.log(" ");
console.log("========================================");
console.log("         EMPLOYEE INFORMATION");
console.log("========================================");

console.log("Name          :", employee.employeeName);
console.log("Position      :", employee.position);
console.log("Company       :", employee.company);
console.log("Country       :", employee.country);
console.log("Age           :", employee.age);
console.log("Salary        : ¥" + employee.salary);
console.log("Experience    :", employee.experience);

console.log(" ");
console.log("========================================");



// ===============================
// Destructuring Test
// ===============================

const{
    employeeName: name,
    position: job,
    company: office,
    country: employeeCountry, 
    age: employeeAge,
    salary: employeeSalary,
    experience: employeeExperience
} = employee;

console.log(" ");
console.log("========================================");
console.log("          EMPLOYEE INFORMATION");
console.log("========================================");

console.log("Name          :", name);
console.log("Position      :", job);
console.log("company       :", office);
console.log("Country       :", employeeCountry);
console.log("Age           :", employeeAge);
console.log("Salary        : ¥" + employeeSalary);
console.log("Experience    :", employeeExperience);

console.log(" ");
console.log("========================================");

//===============================
//Bonus Calculation 
//===============================

function calculateBonus(currentSalary){
      return currentSalary + 50000;
}

const newSalary = calculateBonus(employeeSalary);

console.log(" ")
console.log("========================================");
console.log("            EMPLOYEE STATUS");
console.log("========================================");

console.log("Current Salary :", "¥" + employeeSalary);
console.log("Bonus          :", "¥50000");
console.log("New Salary     :", "¥" + newSalary);

console.log(" ");
console.log("========================================");


// ===============================
// Update Employee
// ===============================

console.log(" ")
console.log("========================================");
console.log("           UPDATED EMPLOYEE");
console.log("========================================");

const updatedEmployee = {
    ...employee,
    salary: newSalary,
    status: "Active"
};

console.log(updatedEmployee);



// ===============================
// Yearly Salary
// ===============================

const calculateYearlySalary = (monthlySalary) => {
    return monthlySalary * 12;
};

const yearlySalary = calculateYearlySalary(updatedEmployee.salary);

console.log("Monthly Salary:", "¥" + updatedEmployee.salary);
console.log("Yearly Salary :", "¥" + yearlySalary);

console.log(" ");
console.log("========================================");



// ===============================
// Ternary Apply
// ===============================

const employeeType = updatedEmployee.age >= 18 ? "Adult ✅" : "Minor ❌";

console.log(" ");
console.log("========================================");
console.log("            EMPLOYEE TYPE");
console.log("========================================");

console.log("Employee Type :", employeeType);

console.log(" ");
console.log("========================================");

// ===============================
// Switch Apply
// ===============================

console.log(" ");
console.log("========================================");
console.log("            OFFICE LOCATION");
console.log("========================================");

switch (updatedEmployee.country) {

      case "Japan":
          console.log("Office : Tokyo Branch 🇯🇵 ");
          break;

      case "USA":
          console.log("Office : New York Branch 🇺🇸 ");
          break;

      case "Bangladesh":
          console.log("Office : Dhaka Branch ");
          break;

      default:
        console.log("Office : Global Branch 🌍");

}
console.log(" ");
console.log("========================================");


// ===============================
// Data Type Apply
// ===============================

console.log(" ");
console.log("========================================");
console.log("              DATA TYPES");
console.log("========================================");

console.log("Salary Type: ", typeof updatedEmployee.salary);
console.log("Age Type: ", typeof updatedEmployee.age);
console.log("Name Type: ", typeof updatedEmployee.employeeName);

console.log(" ");
console.log("========================================");



// ===============================
// Comparison & Boolean Apply
// ===============================

console.log(" ");
console.log("========================================");
console.log("          SALARY VERIFICATION");
console.log("========================================");

console.log("Salary Updated :", updatedEmployee.salary === 400000);
console.log("Is Active      :", updatedEmployee.status === "Active");

console.log(" ");
console.log("========================================");


// ===============================
// Professional Template Strings
// ===============================

console.log(" ");
console.log("========================================");
console.log("           EMPLOYEE SUMMARY");
console.log("========================================");

console.log(`Employee : ${updatedEmployee.employeeName}`);
console.log(`Position : ${updatedEmployee.position}`);
console.log(`Company  : ${updatedEmployee.company}`);
console.log(`Salary   : ¥${updatedEmployee.salary}`);
console.log(`Status   : ${updatedEmployee.status}`);

console.log(" ");
console.log("========================================");




console.log(" ");
console.log("========================================");
console.log(" Project Completed Successfully");
console.log("========================================");
console.log(" ");
