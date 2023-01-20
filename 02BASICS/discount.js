var ListingPrice=799;
// var check=90103138989318941839413713781364837137943797417517341376418347781838*89180309130193013813713771;
// console.log(typeof check)
var check=false;
//Example of Ternary Operator
var num="2";
if(2===num){
    console.log("Type Cohersion");
}
check? console.log("Authenticated"):console.log("NOT Authenticated");
var SellingPrice=199;
var DiscountPrice=(ListingPrice-SellingPrice)/ListingPrice*100;

//we wont use console log directly because it displays everything we need round off the number

console.log("The discounted price is :- "+DiscountPrice);
console.log(typeof DiscountPrice);
DiscountPriceDisplay=Math.round(DiscountPrice);
console.log("The discounted price is :- "+DiscountPriceDisplay+"% off");

