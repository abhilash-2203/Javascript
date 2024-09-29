let year=2014;
if(year>2015){
    console.log('Too late')
    
}
else if(year<2015){
    console.log('Too early')
}
else{
    console.log('Exactly')
}

///Ternary operator
let age=1;
// let result=(age>18)?true:false;
// console.log(result);

//Multiple ?
let result=(age<3)?'Hiii':
(age<18)?'Hello':
(age<100)?'Greetings':'What a unusual age'
console.log(result);

