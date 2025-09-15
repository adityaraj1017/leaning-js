/*
    [ {JS code} ] -> Global execution context
                  -> Assign inside this variable
                  -> Brower give window object as value of this

    * Global execution context
    * Function execution context
    * Eval execution context
    
    How js code run:-

    [ {Js code} ] -> Memory creation phase
                  -> Execution phase

*/

let value1 = 10;
let value2 = 5;

function addNum(num1,num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(value1,value2);
let result2 = addNum(10,2);

/*
    How this code executed:-

    1. Global execution:-
       -> this

    2. Memory phase
       value1 - undefined
       value2 - undefined
       addNum - defination
       result1 - undefined
       result2 - undefined
       
    3. Execution phase
        value1 - 10
        value2 - 5
        addNum - [new variable environment + execution threads]
               -> Memory phase and execution phase is repeated for this function
               -> Return the value in global execution context
               -> This will delete after the return
        result1 - 15
        addNum - [new variable environment + execution threads]
        result2 - 12
*/

/*
    Call stack:-
    If another function is call inside a function then the called function executed first and follow by calling function.
    Based on lifo

    Global execution -> one()

    Global execution -> one() -> two() -> three()
    First function three will return value follow by two and one.
*/