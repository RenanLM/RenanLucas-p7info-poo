function Decimal(value) {
    return value.toString(10);
}
function Octal(value) {
    return value.toString(8);
}
function Hexadecimal(value) {
    return value.toString(16);
}
function Binario(value) {
    return value.toString(2);
}
console.log('Decimal Octal Hexadecimal Binario');
console.log('------- ----- ----------- -------');
for (var index = 0; index < 255; index++) {
    console.log("".concat(Decimal(index), "\t\t").concat(Octal(index), "\t\t").concat(Hexadecimal(index), "\t\t\t").concat(Binario(index)));
}
