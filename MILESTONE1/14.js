const calculateTotalCost = (cart) => {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
      totalCost += cart[i].unitPrice * cart[i].quantity;
    }
    return totalCost;
  }
  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 2, quantity: 6 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost); 