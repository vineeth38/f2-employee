let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter(arr => arr.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log("Developers by Map: ", developerNames);
}
PrintDeveloperbyMap()

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach(function(employee) {
      if (arr.profession === "developer") {
          developers.push(arr.name);
      }
  });
  console.log("Developers by forEach: ", developers);
}
PrintDeveloperbyForEach()

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Employee added: ", newEmployee);
  console.log("New employee array: ", arr);

}
addData()

function removeAdmin() {
  const filteredEmployees = arr.filter(arr => arr.profession !== "admin");
  console.log("Admin removed. New employee array: ", filteredEmployees);
}
removeAdmin();

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
      { id: 5, name: "peter", age: "22", profession: "developer" },
      { id: 6, name: "jane", age: "21", profession: "manager" },
      { id: 7, name: "max", age: "25", profession: "sales" }
  ];
  const allEmployees = arr.concat(newEmployees);
  console.log("Concatenated employee array: ", allEmployees);
}
concatenateArray()