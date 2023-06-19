//objects
var user1={
name:"Angshu",
age: 23,
email:"angshu.majumdar0510@gmail.com"
}
var name="Harikat Singh";
var age=28;

console.log(name);
console.log(age);
//we can print an object in js
console.log(user1);

//we can aslo create array of objects
var examplearr =[
    {name:"Rohan",age:23,company:"KPMG"},
    {name:"Angshu",age:23,company:"Erricson"},
    {name:"Aditi",age:22,company:"Skillovilla"}
];
for(var i=0;i<examplearr.length;i++){
    console.log(examplearr[i].name+" age is "+examplearr[i].age+" works in "+examplearr[i].company);
}