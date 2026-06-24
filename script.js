//Task 1 - Employee Name
let employeeName = prompt("Enter your name:");
console.log("Employee Name:", employeeName);
document.write("Welcome " + employeeName + "<br>");


// Task 2 - Company Entry Confirmation
let entryConfirmation = confirm("Are you an employee of the company?");
console.log(entryConfirmation);


// Task 3 - Customer Greeting
alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");

// Task 4 - Student Details

let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);

// Task 5 - Product Price

let productPrice = 500;
productPrice = 600;
console.log("Product Price:", productPrice);


// Task 6 - Login Validation

let username = prompt("Enter your username:");
if (username === "") {
    console.warn("Username cannot be empty.");
}
else {
    console.log("Login Successful: " + username);
}

// Task 7 - Website Maintenance

alert("The website is currently under maintenance.");
console.error("The website is currently unavailble.");


// Task 8 - Feedback Collection


let feedback = prompt("How was today's JavaScript session?");
console.log("Feedback:", feedback);
document.write("<h2>Thank you for your feedback!</h2>");


// Task 9 - Profile Information


let profileName = prompt("Enter your name:");
let city = prompt("Enter your city:");
let favoriteprogrammingLanguage = prompt("Enter your favorite programming language:");
console.log("Profile Name:", profileName);
console.log("City:", city);
console.log("Favorite Programming Language:", favoriteprogrammingLanguage);


// Task 10 - Mini Registration Form

let regName = prompt("Enter your name:");
let regEmail = prompt("Enter your email:");
let regMobile = prompt("Enter your mobile number:");
console.log("===== Registration Details =====");
console.log("Registration Name:", regName);
console.log("Registration Email:", regEmail);
console.log("Registration Mobile:", regMobile);
alert("Registration Successful!");



