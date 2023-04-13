function double(cart){
    for(let i=0; i<cart.length; i++){
        cart[i] *= 2;
    }
    return cart;
}
const cart=[14, 23, 44 , 55]
const newCart=double(cart); 
console.log(newCart);
