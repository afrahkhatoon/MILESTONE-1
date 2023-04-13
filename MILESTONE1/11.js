function unitConverter(celsius){
    let farenheit = (celsius *1.8) + 32;
    return farenheit
}
let celsius = 20;
let farenheit = unitConverter(celsius)
console.log(farenheit) 