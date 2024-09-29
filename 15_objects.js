// let user={

// };

let user={
    name:'abhi',
    age:23,
    "like birds":true
}
// user.Dob=1411;

// for(let key in user){
//     console.log(key);
//     console.log(user[key]);
// }
// delete user.Dob;

console.log(user["like birds"]);
user["like animals"]=false;
console.log(user["like animals"]);

delete user["like birds"];

for(let key in user){
    console.log(key);
    
}