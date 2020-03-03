/**
Exercise 3.1 - Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.

My Solution:
*/

let min = (a, b) => {
    return (a < b) ?  a : b;
}

console.log(min(1, 5))