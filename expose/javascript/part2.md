12A. student.name  
12B. student['Grad Year']  
12C. student.greeting()  
12D. student['Favorite Teacher'].name  
12E. student.courseLoad[0]  
13A. '3' + 2 = '32' because integers map to their exact string representation  
13B. '3' - 2 = 1 because mathematical operators convert non-numbers into numbers  
13C. 3 + null = 3 because mathematical operators convert non-numbers into numbers  
13D. '3' + null = '3null' since putting quotations convert the number into a string and the addition sign concatates the 3 with null as the addition with a string would concatates both values into a string literal  
13E. true + 3 = 4 since true has a value of 1 therefore true which is 1 plus 3 is 4  
13F. false + null = 0 since false has a value of 0 and null has an empty value therefore adding 0 with an empty value is 0  
13G '3' + undefined = '3undefined' since 3 is a string value, the addition would make this operation a string concatation therefore adding 3 onto undefined  
13H. '3' - undefined = NaN because undefined does not have a numeric value. Subtraction is a numeric operation so 3 is converted into an integer but undefined does not have a numeric value therefore this operation yields a NaN which is an undefined number as it is not possible to add a number to a value that doesn't respresent a number  
14A. '2' > 1 -> true since two is converted into a integer for comparison therefore 2 is bigger than 1.  
14B. '2' < '12' -> false because alphabetically, 2 comes first before 12.  
14C. 2 == '2' -> true since the string '2' is converted into a integer and compared with the numerical value of 2, therefore 2 is equal to 2.  
14D. 2 === '2' -> false because the operator === checks for equality without type converison and when the two operand types don't match, it will immediately return false. 
14E. true == 2 -> false because true is only represented with the numeric value of 1 therefore true is not equal to 2  
14F. true == Boolean(2) -> true since Boolean explicit concversion only returns false if it contains an empty value and 2 is not considered an empty value  
15. === compares equalities between two operands without converting the operand types while == compares equalities between two operands with converting. Therefore a string compared with an integer using === will not be converted and will yield false while using == between an integer and string will compare there two values for inequality.  
17. The results will be the array passed by parameter will be multiplied by 2. The array is passed into the function of modifyArray with the array passed being assigned to the local variable of array. doSomething is passed into the function of modifyArray and assigned into the callback value. Therefore in the modifyArray function, newArr which is a new array is pushed with a function called doSomething which takes in a value and multiplies that value by two then returns that multiplied value back into the new array of newArr. After repeating this for loop, the function modifyArray returns the array that is pushed with the new values.
18. This program will output 1 4 3 2 all in a newline respectively