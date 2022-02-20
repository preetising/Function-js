// // function reverse(a,b,c,d){
// //     var a=""
// // }
// var readlinesync=require("readline-sync");
// var a=readlinesync.question("Enter your number----");
// var b, sum = 0;
// var z = a;
// while(a > 0)
// {
//   b = a % 10;
//   sum = sum * 10 + b;
//   a = parseInt(a / 10);
// }
// alert(sum);


// var a=123456789;
// var sum=0
// while (i<a){
//     sum=sum*10
// }



// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));


var readlinesync=require("readline-sync");
var a=readlinesync.questionInt("Enter your number----")
function reverse(a){
    var b=a+"";
    return b.split("").reverse().join("");

}console.log(reverse(a));



// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray);
