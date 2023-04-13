const customer = {
    name: "John Doe",
    balance: 1000
  };
    const deposit = (customer, amount) => {
    customer.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${customer.balance}.`);
  };
  
  const withdraw = (customer, amount) => {
    if (amount <= customer.balance) {
      customer.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${customer.balance}.`);
    } else {
      console.log("Insufficient funds.");
    }
  };
  deposit(customer, 500); 
withdraw(customer, 200); 
withdraw(customer, 1500); 
