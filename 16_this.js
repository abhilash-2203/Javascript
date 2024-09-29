"use strict"
//this in global space
//  console.log(this);  //global object--incase of browser the global object is window,global

 //this inside a function
 function x(){
    //The value depends on strict unstrict mode
    console.log(this);
 }
 //  x();


 //this in strict mode-(this substitution)
 /***** If the value of this keyword is undefined or null 
 this will be replaced with global object ********/

 //this keyword value depends on how the function is called(window)

//  window.x();

 //this inside a object methods 
 const student={
    name:"Abhilash",
    printName:function(){
        //if we write function inside object is called method
        console.log(this.name);
    }
}
student.printName();
const student2={
    name:"Deepika",
}
//call apply bind methods (sharing methods)
student.printName.call(student2);  //value of this =student2


//this inside arrow function--enclosing lexical context
const obj={
    a:10,
    x:()=>{
        console.log(this);
    }
};
obj.x();

// this inside nested arrow function 
const obj2={
    a:10,
    x:function(){
        const y=()=>{
            console.log(this);
        }
        y();
    }
};
obj2.x();

// this in DOM

// this inside DOM element => reference to HTML element
