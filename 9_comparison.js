console.log(2>1);
console.log(2==1);
console.log(2!=1);
//We can assign result of comparison operator to a variable
let result=5>4;
console.log(result);


//String comparison
console.log('Z'>'A');
console.log('Glow'>'Glee');
console.log('Bee'>'Be');

//When comparing values to different types js convert the values to numbers.
console.log('2'>1)
console.log('01'==1);
console.log(true==1);
console.log(false==0);

// Strict equality
console.log(0==false)
console.log(""==false)
//  === check type as well without typeconversion
console.log(""===false)
console.log(0===false)

//comparison with null and undefined
console.log(null==undefined);
console.log(null===undefined);

//NUll vs Zero
console.log(null>0);
console.log(null==0);
console.log(null>=0);


//Summary
/*Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.*/