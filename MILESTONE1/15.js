const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice-discountedPrice;
    const discountPercentage = (discount/originalPrice)*100;
    return discountPercentage.toFixed(2);
}
const discountPercentage = calculateDiscountPercentage(4000, 2000);

console.log(discountPercentage);
