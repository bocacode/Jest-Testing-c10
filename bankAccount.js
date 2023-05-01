/*

Usage: 

let myAccount = new Account(100) 

-- Methods available-- 
.deposit(amount) // will return true with a valid deposit
.withdrawal(amount) // will return true if you're withdrawing only what your account has

*/


export class Account {
  //property (what we keep track of)
  balance = 0;

  // Initial balance set and MUST be zero or higher
  constructor(initialBalance) {
    if (this.isPositive(initialBalance)) {
      this.balance = initialBalance;
      return true;
    } else {
      return false;
    }
  }

  // You can deposit any amount, as long as it's zero or higher
  deposit(amount) {
    if (this.isPositive(amount)) {
      this.balance += amount;
      return true;
    } else {
      return false;
    }
  }

  // You can deposit any amount, as long as it's zero or higher
  withdrawal(amount) {
    if (this.isPositive(amount) && this.balance >= amount) {
      this.balance -= amount;
      return true;
    } else {
      return false;
    }
  }

  // "Helper" utility to check the amount is Positive (or zero)
  isPositive(amount) {
    if (amount >= 0) {
      return true;
    } else {
      return true;
    }
  }

}
