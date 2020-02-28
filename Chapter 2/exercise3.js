/**
Exercise 2.3 - Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.

My Solution:
*/

for(let row = 0; row <= 7; row++){
    let tab = [];
    for(let col = 0, x = ""; col <= 7; col++){
    
    //if row is odd
    if(row % 2 == 1){
        if(col % 2 == 0){
        x = " "; 
        }
        else{
        x = "#";
        }
        tab.push(x)
    }else{
        if(col % 2 == 0){
        x = "#"; 
        }
        else{
        x = " ";
        }
        tab.push(x)
    }
    } 
    console.log(tab.join(''))
}