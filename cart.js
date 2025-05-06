//Tasks
//1. Identify Errors:
//○ Use the Console tab to locate syntax and runtime errors.
//○ Use the Sources tab to set breakpoints in the calculateTotal,
//applyDiscount, and generateReceipt functions.
//2. Debug and Fix Errors:
//○ Analyze error messages and the call stack to understand the root
//cause.
//○ Use the debugger statement to pause execution in loops and inspect
//variable values.
//3. Validate Fixes:
//○ Test the corrected program with the given cart and a few edge cases:
//i. An empty cart.
//ii. A cart with one item.
//iii. A discountRate of 0 or 1
const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      console.log('card items', cartItems);
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration

  }
  return total;
}

function applyDiscount(total, discountRate) {
 if (typeof total !== 'number' || total < 0) return 0;
    if (typeof discountRate !== 'number' || discountRate < 0 || discountRate > 1){
  console.error("Invalid discount rate. No discount applied.");
      return total;

  }
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  if (!Number.isFinite(total)) total = 0;
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal.toFixed(2)}`;
document.getElementById("receipt").textContent = receipt;

//4. Write a Summary:
//1
//○ Document the errors you found and how you fixed them in comments
//within your GitHub Repo.
//○ Explain how debugging tools helped you locate and resolve issues in
//comments within your GitHub Repo.


// Errors Found and Fixed
//Loop Error in calculateTotal:
//The loop was going one step too far, causing an error.
//Fix: Changed i <= cartItems.length to i < cartItems.length.
//
//Discount Validation in applyDiscount:
//Discount rates like 1 or negative numbers weren’t handled well.
//Fix: Added checks to make sure discount rate is between 0 and 1.
//
//Receipt Formatting in generateReceipt:
//Sometimes total wasn't a number, which caused an error when using .toFixed(2).
//Fix: Added a check to make sure total is a valid number.
//
// Tests Done
//Empty cart: Worked fine, total was $0.00.
//One item: Correct total shown.
//Discount 0: No discount applied.
//Discount 1: Total is $0.00 (100% off).
//
//How Debugging Tools Helped
//Console tab: Showed error messages and helped see what was wrong.
//
//Sources tab: Used to pause the code and check values step-by-step.
//
//Debugger: Helped stop the code in loops to inspect variables like i, total, etc.
//

