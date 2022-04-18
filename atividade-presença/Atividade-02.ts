<<<<<<< HEAD
function Decimal(value:number) {
    return value.toString(10)
}

function Octal(value:number) {
    return value.toString(8)
}

function Hexadecimal(value:number) {
    return value.toString(16)
}

function Binario(value:number) {
    return value.toString(2)
}

console.log('Decimal Octal Hexadecimal Binario')
console.log('------- ----- ----------- -------')

for (let index = 0; index < 255; index++) {
    console.log(`${Decimal(index)}\t\t${Octal(index)}\t\t${Hexadecimal(index)}\t\t\t${Binario(index)}`);
=======
function Decimal(value:number) {
    return value.toString(10)
}

function Octal(value:number) {
    return value.toString(8)
}

function Hexadecimal(value:number) {
    return value.toString(16)
}

function Binario(value:number) {
    return value.toString(2)
}

console.log('Decimal Octal Hexadecimal Binario')
console.log('------- ----- ----------- -------')

for (let index = 0; index < 255; index++) {
    console.log(`${Decimal(index)}\t\t${Octal(index)}\t\t${Hexadecimal(index)}\t\t\t${Binario(index)}`);
>>>>>>> 3ad1f3ab180f5874b998f81493d29a0c6f122598
}