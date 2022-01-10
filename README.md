**Links:**
-   [string methods](https://learn.javascript.ru/string) (task 1)
-   [document, basic work with DOM](https://learn.javascript.ru/document) (task 2)
-   [array methods](https://learn.javascript.ru/array-methods) (task 3)


# Task 1:

**Subtasks:**

- Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
- Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
- Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.
_________________________
# Task 2:
Создать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
![](https://lh6.googleusercontent.com/passViToRdu4QJOWiYGObpHVK91oqomOfCdOg-azFtlJTDpjJKc68uNGJhx4Cr3X_1SEC31Rni4m6jpGA_hq47M7HLbF-2hB37SicHuHIofh0ibjSS6pRV7Qtmnx6RKiafEp4DRo)
_________________________
# Task 3:
С помощью reduce, перепишите реализацию следующего кода

![](https://lh5.googleusercontent.com/bpqQcxJzknzkllURRo2rSt6e5ph89OOPXnXjYn77Ae0Yd0nfAKNWC-VdM-3d36RLL-4dr5-11w0los0wwZIsqYbpHWLmA5zHEvpWn8LV3HxELn9dKlBwl4JUTHJMa4gFCb4tkeU5)
*map*

![](https://lh3.googleusercontent.com/MBT4c68hlnh1J_sLVZYQxH2c6oz4OZ5dk9E0j3Tx5uKlCC3rWXjvI8t5f9JeSHDsenR6ou2ypgmoHupeAQYxkuzlpDWVSdNdfDSrdKYV65r-FUlh7T_CMpn5p6fIqQhJMix7wouy)
*filter*

![](https://lh3.googleusercontent.com/sMxK5UY7tzz4ZbBAlN_Ur8jOO5xwicQA7cNkY14q1lb5av77sfP_bLS6_GaUPPU62gB9YxvNptfJoPo9qsqbczBCFId0ejctLjZKCynCfn-y3C5vnsILf17Egqy-PVXwAwER5C-9)
*forEach*
_________________________

## Задание с предыдущего дня

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
