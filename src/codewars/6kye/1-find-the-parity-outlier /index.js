/*
* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
* The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single
* integer N. Write a method that takes the array as an argument and returns this "outlier" N.

* Examples
* [2, 4, 0, 100, 4, 11, 2602, 36]
* Should return: 11 (the only odd number)

* [160, 3, 1719, 19, 11, 13, -21]
* Should return: 160 (the only even number)
 */

const findOutlier = (integers) => {
    //your code here

    const oddArr = [];
    const evenArr = [];
    let result = 0;

    integers.every((item) => {
        if (item % 2) {
            evenArr.push(item);
        } else {
            oddArr.push(item);
        }

        if (oddArr.length >= 2 && evenArr.length === 1) {
            result = evenArr[0];
            return false;
        }

        if (evenArr.length >= 2 && oddArr.length === 1) {
            result = oddArr[0];
            return false;
        }

        return true;
    });

    return result;

}