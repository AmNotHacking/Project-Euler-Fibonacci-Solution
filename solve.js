let num1 = 1;
let num2 = 2;
let temp = 0;
let sum = 0;
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89
while (sum < 4000000) {
    if (num2 % 2 === 0) {
        sum = sum + num2;
        console.log(sum);
    }
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
}