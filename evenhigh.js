function findTheNumber(isEven, isHighest, numbers) {
    let filteredNumbers = numbers.filter(function(num) {
        return isEven ? num % 2 === 0 : num % 2 !== 0;
    });
    let sortedNumbers = filteredNumbers.sort(function(a, b) {
        return isHighest ? b - a : a - b;
    });
    return sortedNumbers[0];
}

/*
The findTheNumber function takes 3 inputs - isEven (a boolean), 
isHighest (a boolean), and numbers (an array of numbers).
The function first filters the numbers array based on the isEven input. 
If isEven is true, the function filters the array to only include even numbers.
 If isEven is false, the function filters the array to only include odd numbers.
Next, the filtered array is sorted based on the isHighest input. If isHighest is true, 
the function sorts the array in descending order.
 If isHighest is false, the function sorts the array in ascending order.


*/