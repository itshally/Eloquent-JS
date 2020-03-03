/**
Exercise 3.2 - Recursion

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:

• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?

My Solution:
*/

let isEven = (n) => {
    return (n === 0) ? true : (n === 1) ? false : (n < 0) ? isEven(-n) : isEven(n - 2);
}

console.log(isEven(-1))