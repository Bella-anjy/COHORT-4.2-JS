/**
 * Logical Operators
 * AND Operator (&&)
 * OR Operator (||)
 * Not Operator (!)
 */

// AND Operator &&
// When && operator is placed between two JS expressions, the result
// will return a truthy value if the both expression are true otherwise falsy value is returned

let isSunny = true;
let isCoding = true;

let check = isCoding && isCoding;
console.log("check =", check);

// OR Operator ||
// When || operator is placed between two JS expressions, the result
// will return a truthy value if either of the expression is true otherwise falsy value is returned

let isRainy = false;
let isUmbrellaAvailable = true;

let verify = isRainy || isUmbrellaAvailable;
console.log("verify =", verify);

// Not Operator !
// The Not operator ! is used to reverse a result. That is, a positive to negative, or negative to positive.

let changeValue = !isRainy;
console.log("changeValue =", changeValue);
