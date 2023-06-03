//   Class Calculator
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}

// ScientificCalculator class extending Calculator

class ScientificCalculator extends Calculator {
    square(num) {
        return num * num;

    }
    cube(num) {
        return num * num * num;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }

}

// Creating an instance of ScientificCalculator class

const scientificCalc = new ScientificCalculator();

// Using the 'call' method , invoke the 'add' method of the 'Calculator' class with arguments 10 and 5.

const sum = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log('Sum:', sum);
// Using the 'apply' method , invoke the 'subtract' method of the 'Calculator' class with arguments 10 and 5.

const difference = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log('Difference', difference);

// Using the 'bind' method, create a new method named 'multiplyByTwo' that multiplies a number by 2 and returns the result.
// Bind the 'multiplyByTwo' method to the instance of ScientificCalculator class.

const multiplyByTwo = scientificCalc.multiply.bind(scientificCalc, 2);
const result1 = multiplyByTwo(5);
console.log("Result1:", result1);

// Using the 'bind' method, create a new method named 'powerOfThree' that raises a number to the power of 3 and returns the result.
//  Bind the 'powerOfThree' method to the instance of ScientificCalculator class.

const powerOfThree = scientificCalc.power.bind(scientificCalc, 3);
const result2 = powerOfThree(2);
console.log("Result2:", result2);