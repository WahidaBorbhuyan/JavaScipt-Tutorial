scores = [85, 92, 78, 96, 88];
console.log("Original scores:", scores);

// Using map to create a new array with scores increased by 5
let increasedScores = scores.map(score => score + 5);
console.log("Scores after increasing by 5:", increasedScores);

// Using filter to create a new array with scores greater than 90
let highScores = scores.filter(score => score > 90);
console.log("Scores greater than 90:", highScores);

// Using map and filter together to get scores increased by 5 that are greater than 90
let increasedHighScores = scores.map(score => score + 5).filter(score => score > 90);
console.log("Scores increased by 5 that are greater than 90:", increasedHighScores);
