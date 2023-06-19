// const fs=require("fs");

// function callbackFn(err,data){
//     console.log(data);
// }
// fs.readFile("./100xdev/w.txt","utf-8",callbackFn);

const express = require('express')
const app = express()
const port = 3000
function CalculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;

}
function handleFirstRequest(req,res){
    var counter=req.
    var CalculatedSum=CalculateSum(100);
    var answer="The sum is" +CalculatedSum ;
    res.send(answer);
}

app.get('/handlesum',handleFirstRequest)

function started(req,res){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)
  
function CalculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;

}
//console.log(CalculateSum(100));