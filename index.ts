// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let student = [
  {studentName: "Portia", studentSurname: "Mashaba", Age: 28, Grade: "10A"},
  {studentName: "Xolisile", studentSurname: "Ubisi", Age: 21, Grade: "AA"},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 14, Grade: "7C"},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 30, Grade: "AA"}, 
  {studentName: "Thembi", studentSurname: "Maseko", Age: 48, Grade: "BA"},
  {studentName: "Faith", studentSurname: "Letswalo", Age: 7, Grade: "8A"},
  {studentName: "Palesa", studentSurname: "Msiza", Age: 8, Grade: "4D"},
  {studentName: "Lerato", studentSurname: "Smith", Age: 9, Grade: "5B"},
  {studentName: "Lethabo", studentSurname: "Bongo", Age: 10, Grade: "6F"}, 
  {studentName: "Thabo", studentSurname: "Maseko", Age: 15, Grade: "10D"}
];

//Create Function to count students less than 10 years of age
function countStudents(student){
  let counter = 0;
for (let i = 0; i < student.length; i++) {
  if (student[i].Age < 10) counter++;
}
return counter;
}

//log results
console.log(countStudents(student));