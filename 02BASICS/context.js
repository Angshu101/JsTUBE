DemoCall();
//even if we call the function before its defined it will still run the code because there is a conccept of global context so whenever we declare a function its saved in the global context in javascript that global context may differ for example:

function DemoCall(){
    console.log("This is a Demo call");
}


// Continued here
var myname="Angshu"
if(myname==myname){
    console.log("This is true");
}//This works Perfectly
if(myname==window.myname){
    console.log("This is true");
}//Throws an error in desktop because window is only present in global context un browser