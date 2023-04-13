const marks = [80,90,73,88,92];
let highestMarks = marks[0];
for(let i=1; i < marks.length; i++){
    highestMarks = highestMarks > marks[i] ? highestMarks : marks[i];
}
console.log("the Highest marks scored by a student in the class is:", highestMarks)

