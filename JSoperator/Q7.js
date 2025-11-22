let feedback="Great product! Fast delivery and amazing sound quality! "

let array=feedback.split(' ');

if(array.includes("bad" || "poor")){
    console.log("Needs Improvement");
}
else{
    console.log("Positive feedback");
}