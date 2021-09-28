var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));//(10*(12-5)/8+(5+12)) <= (8*(12+10)/(5+12)+10)
console.log(d);//                                                               25.75           <=   20.352941176470587
if (d == 1){
console.log((a * (c - b) / e + (b + c)));//((10*(12-5)/8+(5+12)))=25.75
} else {
console.log((e * (c + a) / (b + c) + a));//((8*(12+10)/(5+12)+10))=20.352941176470587
}


var n = 2;
var p = 4;
var q = 5;
var w = 3;
if ( !((p * q) /n <= (q * w) + n/p ))//10<=7.5
 {
console.log( ++p + w++ + " " + ++n);//5+3 3
}
else {
console.log(--p + q-- + " " + --n);//3+5 1
}
