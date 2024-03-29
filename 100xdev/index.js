// const fs=require("fs");

// function callbackFn(err,data){
//     console.log(data);
// }
// fs.readFile("./100xdev/w.txt","utf-8",callbackFn);
// In JavaScript, middleware refers to a function or set of functions that sit between the incoming request and the outgoing response in an application's request-response cycle. It allows you to perform certain operations on the request or response objects, modify them if needed, and pass control to the next middleware function in the chain.

// Middleware functions are commonly used in frameworks like Express.js to add extra functionalities to the server-side application. Let's see an example of how middleware can be implemented in JavaScript using Express.js:

// javascript


const express = require('express')
var bodyParser=require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json()) //example of middleware
//app.use(middleware1);
//let numberofrequest=0
//middleware gets called before any route handlers
// function middleware1(req,res,next){
//     numberofrequest=numberofrequest+1;
//     console.log(numberofrequest);
//     console.log("From Inside middleware 1");
//     next();
//     //we can put this in if else condition if condition is met then next or error
//     //res.send("error from middleware 1");
//     //if next is not called middleware has the power to respond
//     //only when next is called control moves to different line
// }
function CalculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;

}
//Type of request from browser is by default get request others are GET POST PUT DELETE
function Mul(counter){
    var mul=1;
    for(var i=1;i<=counter;i++){
        mul=mul*i;
    }
    return mul;

}
function handleFirstRequest(req,res){
    //now we have to send the counter value through user three ways we can send query params headers and body 
   //var counter=req.query.counteer;
   console.log(req.body);
   console.log(req.headers);
   console.log(req.query);
//    var counter=req.headers.counter
var counter=req.body.counter

// if(counter<10000){
//     var CalculatedSum=CalculateSum(counter);
//     var Multiplied= Mul(counter);

//     var answer={
//         sum: CalculatedSum,
//         mul: Multiplied,
//     };
//     res.send(answer)
//    }
//    else
//     res.status(411).send("You have send very big number");
var CalculatedSum=CalculateSum(counter);
var Multiplied= Mul(counter);

var answerobj={
"sum":CalculatedSum,
"mul":Multiplied
};
res.send(answerobj);// we can also use res.json which ensures we send a json object in re.send we can also send plain text
}
function SecondRequest(req,res){
    var Multiplied= Mul(5);
    var answer="The multiplication is " +Multiplied ;
    //res.status(401).send(answer);//function curring
    res.send(answer)
}
function givepage(req,res){
    res.sendFile(__dirname+"/html/index.html");
}
app.get('/handlesum',handleFirstRequest)
app.post('/createuser',SecondRequest)
app.get("/",givepage)
function started(req,res){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)// http server has to be run indefinatly its not that when I go to sleep servers should not be down
  
function CalculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;

}
//console.log(CalculateSum(100));