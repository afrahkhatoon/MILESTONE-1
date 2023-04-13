function calculateRentalCost(rentedDays,carType){
    let rentalCost;
    switch(carType){
        case "economy":
            rentalCost = 4000;
            break;
        case "midsize":
            rentalCost = 15000;
            break;
        case "luxury":
            rentalCost = 20000;
            break;
        default:
            rentalCost = 0;
    }
    return rentalCost * rentedDays;
}
let totalCost=calculateRentalCost(3, "economy");
console.log(totalCost)