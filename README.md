# The Calculator Project

## Guidelines

1.  Your calculator id going to contain functions for all of the basic math
    operators you typically find on simple calculators, so start by creating functions
    for the following items and testing them in your browser's console.<br>

        1. add
        2. substract
        3. multiply
        4. divide

2.  Create a new function `operate` that takes an operator and 2 numbers and then
    calls one of the above functions on the numbers.<br>

3.  Create a basic HTML calculator with buttons for each digit, each of the above
    functionsand an "Equals" key.<br>

        1. Do not worry about writing the js just yet.
        2. There should also be a display for the calculator, go ahead and fill
           it with some dummy numbers so you can get it looking right.
        3. Add a "clear" button.

4.  Create the functions that populate the display when you click the number
    buttons… you should be storing the ‘display value’ in a variable somewhere for
    use in the next step.

5.  Make the calculator work! You’ll need to store the first number that is
    input into the calculator when a user presses an operator, and also save which
    operation has been chosen and then `operate()` on them when the user presses the “=” key.

6.  Gotchas: watch out for and fix these bugs if they show up in you code:

    1. Users should be able to string together several operations and get the
       right answer, with each pair of numbers being evaluated at a time.
       For example, `12 + 7 - 5 * 3 =` should yield 42. An example of the behavior
       we’re looking for would be this student solution. **Your calculator should
       not evaluate more than a single pair of numbers at a time. If you enter a
       number then an operator and another number that calculation should be
       displayed if your next input is an operator. The result of the calculation
       should be used as the first number in your new calculation.**
