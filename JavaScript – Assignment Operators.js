
var input = 7;
var output1 = ++input + ++input + ++input;//8+9+10=27
var output2 = input++ + input++ + input++;//10+11+12=33
var output3 = input++ + ++input + input++;//13+15+15=43
console.log(output1 + ' ' + output2 + ' ' + output3);
x=0;
x++;
x += 1;
var num = 100;
num += 5 * 10 / 2;
console.log(num);
var num = 100;
num *= 2 * 10 / 5;
console.log(num);
var num = 100;
num /= 2 * 8 - 15;
console.log(num);