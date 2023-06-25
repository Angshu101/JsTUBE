DemoCall();
//even if we call the function before its defined it will still run the code because there is a conccept of global context so whenever we declare a function its saved in the global context in javascript that global context may differ for example:

function DemoCall(){
    console.log("This is a Demo call");
}


// Continued here
// var myname="Angshu"
// if(myname==myname){
//     console.log("This is true");
// }//This works Perfectly
// if(myname==window.myname){
//     console.log("This is true");
// }//Throws an error in desktop because window is only present in global context un browser


//code hoisting 
//let me declare a funtion one small tipper and bigtipper
smallTipper("10");// Even if the funtion is called before declartion this still works due to global context 
//function when declared made available varibales when declared becomes undefined
function smallTipper(a) {
    var tip=parseInt(a);
    console.log(tip+5);
    
}
//bigTipper("10");//here bigtipper acts as a varible if called before declaration
 bigTipper=function(a) {
    var tip=parseInt(a);
    console.log(tip+5);
}
bigTipper("20")

//arrys.shift removes element from begining of the array and arrays.unshit adds an element at the begining of the array
//arrays.every runs test on every element if it passes the test it returns true or else false 
//
//arrrys.fil(value,fromwhichindex?,tillwhichindex)
//arrays.filter(takes a callbackfn)
var arr=[30,70,67,23,89,54,21,34,54,60];
var result1=arr.filter((num)=>num!=23);
var result2=arr.filter((num)=>num>23);
var result3=arr.filter((num)=>num<23);
var result4=arr.fill("Angshu",4,6);

const obj={
    result1:result1,
    result2:result2,
    result3:result3,
    result4:result4

};
console.log(obj);
//slice and spice method of an array
console.log(arr.slice(2));

const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(1, 3, 'a', 'b', 'c'); //here 1 is the start value 3 is the count value

console.log(array); // Output: [1, 'a', 'b', 'c', 5]
console.log(removedElements); // Output: [2, 3, 4]
//objects & methods
var user = {
    firstName: "Hitesh",
    lastName: "Choudhary",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
      this.courseList.push(courseName);//this signifies the course list present in the scope of this object and not the global context
    },
    getCourseCount: function () {
      return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;////this signifies the course list present in the scope of this object and not the global context
    },
  };
  
  var courseList = true;
  console.log(user.firstName);
  console.log(user.getCourseCount());
  user.buyCourse("React JS course");
  user.buyCourse("Angular course");
  console.log(user.getCourseCount());
  

  const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra",
  ];
  
  // var i = 0;
  
  // for (;;) {
  //   if (i > 3) break;
  //   console.log(i);
  //   i++;
  // }
  
  myStates.forEach((s) => (console.log(s)));
  myStates.forEach((s) => console.log(s));
  const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

// for (const n of names) {
//   console.log(n);
// }
//for of is for arrays and for in is for objects

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
