const numbers = [3, 6, 9, 12, 15, 18, 21 ]
for(let i = 0; i< numbers.length; i++){
    const currentNumber = numbers[i];
    if(currentNumber % 2 === 0 ){
        continue;
    }
    if(currentNumber % 3 === 0){
        console.log(currentNumber);
    }
}
