function str_count(str, char) {
    // Use split method to split the string by the given character
    // The length of the resulting array minus 1 gives the count of the character
    return str.split(char).length - 1;
}

// Test cases
console.log(str_count("Hello", 'o')); // returns 1
console.log(str_count("Hello", 'l')); // returns 2
console.log(str_count("", 'z')); // returns 0






function calculatePoints(matches) {
    let totalPoints = 0;

    for (let match of matches) {
        // Split the match result into x and y
        let [x, y] = match.split(':').map(Number);

        // Determine points based on the result
        if (x > y) {
            totalPoints += 3; // Win
        } else if (x === y) {
            totalPoints += 1; // Tie
        }
        // No need to add points for a loss as it is 0 points
    }

    return totalPoints;
}

// Example usage:
const matchResults = ["3:1", "2:2", "0:1", "4:0", "2:3", "1:1", "3:3", "0:4", "4:4", "1:0"];
console.log(calculatePoints(matchResults)); // Output will be the total points
