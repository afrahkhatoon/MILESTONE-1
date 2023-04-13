var vowelsCount=0
const vowels=["a","e","i","o","u"]
function vowelcounter(str){
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount
}
let count=vowelcounter("afrah")
console.log("vowels are:" + count)