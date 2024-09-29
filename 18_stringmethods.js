//length
console.log("abcd".length);
//Accessing a chararcter
// let str='Hello';
// console.log(str[0]);
// console.log(str.at(0));
// console.log(str[str.length-1]);
// console.log(str.at(-1));

// changing the case 
console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());
//single
console.log('Interface'[0].toLowerCase());

//searching for a substring
let str='Widget with id'
console.log(str.indexOf('Widget'));
console.log(str.indexOf('widget'));
console.log(str.indexOf('id',2));
console.log(str.indexOf('with'));
// includes,
// str.includes('str',pos)
//startsWith
//endsWith

//slice
let s="stringify";
console.log(s.slice(0,5));  // end is not included
console.log(s.substring(0,5));
console.log(s.substring(5,0));

//substr 2nd arg length
console.log(s.substr(2,4));

//trim
// repeat(n)
