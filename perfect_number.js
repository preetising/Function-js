// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("Enter your number---")
// function is_perfect(num){
// var sum = 0;
// for(var i=1;i<=num/2;i++){
//     if(num%i === 0)
//         {
//         sum += i;
//         }
//     }
//     if(sum === num && sum !== 0){
//         console.log("It is a perfect number.");
//     }else{
//        console.log("It is not a perfect number.");
//     }   
// } 
// is_perfect(num); 





var readlinesync=require("readline-sync")
var num=readlinesync.questionInt("Enter your number---")
var sum=0
for (let i=1;i<=num/2;i++){
    if (num%i==0){
        sum+=i
    }
}if (sum===num && sum!==0){
    console.log("yes perefect no");

}else{
    console.log("not perfect number");
}




