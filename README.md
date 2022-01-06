


# Task 1:
**Count IP Addresses**
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one. 

*Examples*

    ipsBetween("10.0.0.0", "10.0.0.50") === 50
    ipsBetween("10.0.0.0", "10.0.1.0") === 256
    ipsBetween("20.0.0.10", "20.0.1.0") === 246

----------

# Task 2:
**Morse**
You have to write a simple [Morse code](https://en.wikipedia.org/wiki/Morse_code) decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

*NOTE*: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal [SOS](https://en.wikipedia.org/wiki/SOS) (that was first issued by [Titanic](https://en.wikipedia.org/wiki/RMS_Titanic)), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

    decodeMorse('.... . -.-- .--- ..- -.. .') //should return "HEY JUDE"

*NOTE*: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

[Good luck!](https://gist.github.com/mohayonao/094c71af14fe4791c5dd)

__________________

# Task 3:

**Tic-Tac-Toe Checker**
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

    [[0, 0, 1],
     [0, 1, 2],
     [2, 1, 0]]

We want our function to return:
1 if "X" won,
2 if "O" won,
-1 if the board is not yet finished (there are empty spots and no one wins),
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
____________________

# Task 4:

**Find a Chair**
So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.
Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.
Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs there are in the room.
You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.
*example*: `[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]]` when you need 4 chairs:
`result -- > [0, 1, 3`] (no chairs free in room 0, take 1 from room 1, take 3 from room 2. No need to consider room 4 as you have your 4 chairs already.
If you need no chairs, return '*Game On*'. If there aren't enough spare chairs available, return '*Not enough!*'
*Examples:*

    meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
    meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
    meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'
    meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'

____________________

# Task 5:

**Vasya - Clerk**

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single *100*, *50* or *25* dollar bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
Return *YES*, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return *NO*.

*Examples*:

    tickets([25, 25, 50]) // => YES
    tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
    tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

_______________________

# Task 6:

**Quipu Calculator**
The Quipu is the numbering system of the ancient Incas. A number is represented by knots in a string, using a positional representation (in base-10).
The representation of 123: one knot + space + two knots + space + three knots
Zeros are represented using a blank space. (leading zeros are not allowed)
@ is a knot and ~ is a space.

    123 => @~@@~@@@
    20 => @@~~

Create a method that calculates mathematical expressions in quipu format.
*Input*
A string representing a mathematical expression with operands in the quipu format above, separated by the plus [+] or minus [-] or division [/] or multiplication [*] sign.

    @~@ => 11
    @~~@ => 101
    @~~~@ => 1001

*Output*
A string representing the result of the mathematical expression in quipu format.
*Example*:

    calculate("@~@@*@@")
    => "@@~@@@@"
    calculate("@~@@+@@~~")
    => "@@@~@@"


_________________________

# Task 7:

**Find the Partition with Maximum Product Value**
You are given a certain integer, n, n > 0. You have to search the partition or partitions, of n, with maximum product value.
Let'see the case for n = 8.

    Partition                 Product
    [8]                          8
    [7, 1]                       7
    [6, 2]                      12
    [6, 1, 1]                    6
    [5, 3]                      15
    [5, 2, 1]                   10
    [5, 1, 1, 1]                 5
    [4, 4]                      16
    [4, 3, 1]                   12
    [4, 2, 2]                   16
    [4, 2, 1, 1]                 8
    [4, 1, 1, 1, 1]              4
    [3, 3, 2]                   18 <---partition with maximum product value
    [3, 3, 1, 1]                 9
    [3, 2, 2, 1]                12
    [3, 2, 1, 1, 1]              6
    [3, 1, 1, 1, 1, 1]           3
    [2, 2, 2, 2]                16
    [2, 2, 2, 1, 1]              8
    [2, 2, 1, 1, 1, 1]           4
    [2, 1, 1, 1, 1, 1, 1]        2
    [1, 1, 1, 1, 1, 1, 1, 1]     1

So our needed function will work in that way

    findPartMaxProd(8) --> [[3, 3, 2], 18]

If there are more than one partition with maximum product value, the function should output the partitions in a length sorted way.

    findPartMaxProd(10) --> [[4, 3, 3], [3, 3, 2, 2], 36]

Enjoy it!
*Tests*:

     describe("Example Tests", function(){
       it("Small Integers", function(){
        Test.assertSimilar(findPartMaxProd(8), [[3, 3, 2], 18]);
        Test.assertSimilar(findPartMaxProd(10), [[4, 3, 3], [3, 3, 2, 2], 36]);
       });
     });

______________________
# *Task 7 variant 2:
**Бойся драконов**

Есть предание, что драконы бывают многоголовы. И чем голов больше у дракона, тем большая сила подвластна ему. Но страшнее дракона может быть только стая драконов. И страшна тая стая тем, что сила ее не суммируется от голов драконов, а преумножается. Если в стае той 3 дракона с 2, 4 и 5 головами, то силушкой общей они могут посоперничать с мифическим 40-головым драконищем иродовым. Тому Вам, волхвы уважаемые, предстоит написать заклинание мудрёное. Лазутчики головы посчитают издалека, а ваша задача сказать, какова может быть максимальна сила той стаи. К чему готовиться защитникам бравым, каковы заклинания готовить волшебникам седовласым.

*Входные данные:*
Число - количество голов предполагаемой стаи от 2 до 20

*Выходные данные:*
Число - максимальная сила стаи
