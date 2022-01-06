Task 1:
Sum of Minimums! Given a 2D array of size m \* n. Your task is to write a function to find the sum of minimum value in each row. For Example:

[
[1, 2, 3, 4, 5], // minimum value of row is 1
[5, 6, 7, 8, 9], // minimum value of row is 5
[20, 21, 34, 56, 100] // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26 Note: You will be always given non-empty array containing Positive values. Examples

sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]) //1 + 22 + 1 = 24
sumMin([[11,2],[323,2,55]]) //2 + 2 = 4
sumMin([[13,11,2],[3,23,23,55],[23,55,3,77],[39,7,89,94]]) //2 + 3 + 3 + 7 = 15
Task 2:
Two Oldest Ages The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age]. The order of the numbers passed in could be any order. The array will always include at least 2 items. For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
Task 3:
Shortest Word Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types. Examples

"bitcoin take over the world maybe who knows perhaps" --> 3
"turns out random test cases are easier than writing out basic ones" --> 3
"lets talk about javascript the best language" --> 3
"i want to travel the world writing code one day" --> 1
"Lets all go on holiday somewhere very cold" --> 2
Task 4:
Your order, please Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople"
"" --> ""
