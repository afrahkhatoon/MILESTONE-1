const cart = ['apple', 'banana', 'orange', 'banana', 'kiwi', 'orange'];
function removeDuplicates(cart) {
    let result = [];
    for (let i = 0; i < cart.length; i++) {
      if (!result.includes(cart[i])) {
        result.push(cart[i]);
      }
    }
    return result;
  }
 
const uniqueCart = removeDuplicates(cart);
console.log(uniqueCart);