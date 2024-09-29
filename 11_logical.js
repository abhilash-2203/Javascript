//OR -------||
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

//AND --------&&
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(1 && 5);   // And return the second operator

//!(NOT)--convert into boolean
console.log(!true)
console.log(!0)
console.log(!! "non empty string")
console.log(!!null)

//the nullish coalescing operator ?? return first if not null or undefined otherwise second
let height=null;
let width=null;
console.log((height??100)*(width??50));




//Summary
/*The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.*/
