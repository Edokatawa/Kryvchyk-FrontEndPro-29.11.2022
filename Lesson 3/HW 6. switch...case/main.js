let numOrStr = prompt('input number or string');
console.log(numOrStr)

numOrStr = numOrStr === null ? null : numOrStr.trim();
numOrStr = isNaN(+numOrStr) === true ? false : numOrStr;
switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}