let marks = [85, 92, 78, 96, 88];
console.log("Marks of the students:", marks);
marks[2] = 80; // Updating the mark of the third student
console.log(marks[2]); // Output: 80
console.log("Total number of students:", marks.length);

//To add elements to the end of the array:
marks.push(90);
console.log("Marks after adding a new mark:", marks);

//To remove the last element from the array:
marks.pop();
console.log("Marks after removing the last mark:", marks);

//To add elements to the beginning of the array:
marks.unshift(95);
console.log("Marks after adding a mark at the beginning:", marks);  

//To remove the first element from the array:
marks.shift();
console.log("Marks after removing the first mark:", marks);

//To find the index of a specific mark:
let index = marks.indexOf(88);
console.log("Index of mark 88:", index); // Output: 3

//To check if a mark exists in the array:
let exists = marks.includes(92);
console.log("Does mark 92 exist in the array?", exists); // Output: true    

//To get a portion of the array:
let subMarks = marks.slice(1, 4);
console.log("Subarray of marks from index 1 to 3:", subMarks); // Output: [92, 80, 96]

//To print all marks using a loop:
console.log("All marks:");
for(let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

