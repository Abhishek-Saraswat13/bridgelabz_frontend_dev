let arr=[50,60,70,80,90];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
let afterTax=sum*0.1;

let finalAmount=afterTax.toFixed(2);
console.log("Total "+sum,"Average "+(sum/arr.length).toFixed(2),"After Tax "+finalAmount);