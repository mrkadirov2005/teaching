// Task 1. Age Checker

// Ask the user for their age and:
// - If age is 18 or older, print "You are an adult".
// - Otherwise, print "You are a minor".
// Task 2. Positive, Negative or Zero

// Create a variable containing a number.
// - If the number is greater than 0, print "Positive".
// - If it is less than 0, print "Negative".
// - Otherwise, print "Zero".
// Task 3. Even or Odd

// Create a variable containing an integer.
// - Check whether the number is even or odd.
// - Print the appropriate message.
// Task 4. Temperature Checker

// Create a variable called temperature.
// - If temperature is above 30, print "It's hot".
// - If temperature is between 15 and 30, print "The weather is nice".
// - Otherwise, print "It's cold".
// Task 5. Password Checker

// Create a variable called password.
// - If the password equals "admin123", print "Access granted".
// - Otherwise, print "Incorrect password".
// Task 6. Grade Calculator

// Create a variable called score.
// - 90–100: "Excellent"
// - 70–89: "Good"
// - 50–69: "Passed"
// - Below 50: "Failed"
// - If the score is outside 0–100, print "Invalid score".
// Task 7. Simple Login System

// Create two variables:
// - username
// - password
// Requirements:
// - Username must equal "student".
// - Password must equal "12345".
// - If both are correct, print "Login successful".
// - Otherwise, print "Login failed".

const username = "student";
const password = "12345";
if(username === "student" && password === "12345") {
    return "login successfull"
} else {
    return "login failed"
}


// Task 8. Discount Calculator
// Create a variable called purchaseAmount.
// - If the amount is above 1,000,000, apply a 20% discount.
// - If the amount is above 500,000, apply a 10% discount.
// - Otherwise, no discount.
// Print the final amount after the discount.

// Task 9. Largest Number

// Create three variables:
// - num1
// - num2
// - num3
// Find and print the largest number using conditional statements.

// Task 10. Electricity Bill Calculator

// Create a variable called electricityUsage (in kWh).
const usage = 10
// Calculate the bill using these rules:
// - First 100 kWh: 500 UZS per kWh.
// - From 101 to 200 kWh: 750 UZS per kWh.
// - Above 200 kWh: 1,000 UZS per kWh.
// For simplicity, apply the corresponding rate to the entire usage.
if(usage < 100) {
    return usage * 500;
} else if (usage > 100 && usage < 200) {
    return usage * 750
} else if( usage > 200) {
    return usage * 1000
}
// Print the total electricity bill.

// Rules for the student
// 1. Use only let and const.
// 2. Use if, else if, and else.
// 3. Use console.log() to display results.
// 4. Don't use loops, arrays, or functions.
// 5. Try solving each task independently.