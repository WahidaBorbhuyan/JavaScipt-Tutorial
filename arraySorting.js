arrayDigits = [67, 45, 23, 89, 12];

arrayAlpha = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

//Sorting the strings array in order:
arrayAlpha.sort();
console.log("Sorted array of fruits:", arrayAlpha);
arrayAlpha.reverse(); // To sort in descending order
console.log("Sorted array of fruits:", arrayAlpha);

//Sorting the numbers array inorder:
arrayDigits.sort((a, b) => a - b);
console.log("Sorted array of digits:", arrayDigits);

arrayDigits.sort((a, b) => b - a);
console.log("Reverse Sorted array of digits:", arrayDigits);

