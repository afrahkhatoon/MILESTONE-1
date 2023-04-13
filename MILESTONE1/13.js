function billSplitter(cost, peopleSharing){
    let totalBill = cost * peopleSharing;
    let billPerPerson = totalBill / peopleSharing;
    let result={
        totalBill:totalBill,
        billPerPerson:billPerPerson,
    };
    return result;
}
let bill=billSplitter(14000,6)
console.log(bill)