// // var preeti=true;
// // console.log(preeti);
// // console.log(typeof(preeti));

// // var y="";
// // var x=0
// // console.log(y+x);

// // var y="preeti";
// // var n="singh";
// // console.log(y-n)


// console.log(true+true);
// console.log(true+false);
// console.log(false+true);
// console.log(false-true);


// var a=null;
// console.log(a);
// console.log(typeof(a));




// var phonenumber=23456999;
// var name="nishu";
// console.log(isNaN(name))
 

// console.log(NaN==NaN);
// console.log(Number.NaN==NaN);
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// Assigement operators
// var y=5;
// var x=5;
// console.log(y==x)


// Arithmetic operators 

// console.log(2+6);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log(81%2);


// var num=15;
// var num2=num++
// console.log(num);
// console.log(num2++);


// postincrement operator 
// var num=15;
// var num2=++num+5
// console.log(num);
// console.log(num2);


// post decrement operator 


// var num=20;
// var num2=num--
// console.log(num);
// console.log(num2);


// var num=20;
// var num2=--num
// console.log(num);
// console.log(num2);
 
// let num=15;
// ++num
// console.log(num);


// let num=16
// num++
// console.log(num);



// let num2=15
// --num2+10;
// console.log(num2);
// console.log();


// let num=15;
// num--
// console.log(num);



// COMPAIRSION OPERATOR

// equale to

// var a=10;
// var b=10;
// console.log(a==b);


// GREATER THEN 

// var a=60;
// var b=40;
// console.log(a>b);


// LESS THEN

// var a=50;
// var b=90;
// console.log(a<b);

// GREATER THE N EQUALE TO

// var y=60;
// var v=50
// console.log(y>=v);


// LESS THEN EQUUALE TO 


// var a=50;
// var b=90;
// console.log(a<=b); 

// NOT !EQUALE TO

// var a=20;
// var num=60;
// console.log(a!=num);


//LOGICAL OPERATORS

// logical && operators 
// var a=10;
// var b=30;
// console.log(a<=b && b>a);



// logical or || operators 

// var a=10
// var b=80
// console.log(a<b) || (b<=90 );

// var a=10
// var b=80
// console.log(!((a<b) || (b<=90 )));
// console.log(!true);

// it will change the value true to false and false to ttreu

// TEST TIME 

// console.log(3**3);

// var num=90;
// var string=" preeti"
// console.log(num+string);


// SWAPPING

// var a=10
// var b=5
// var c=b
// b=a
// a=c
// console.log(a,b);


// var y=20
// var x=10
// y=y+x
// x=y-x
// y=y-x
// console.log(y,x);


// var a=30;
// var b=90;
// c=b;    
// b=a    
// a=c   
// console.log(a,b)

// var readlinesync=require("readline-sync");
// var year=readlinesync.question("Enter your number------")
// if (year%4===0){
//     if (year%100===0){
//         if (year%400===0){
//             console.log("yes it is leap year")
//         }else{
//             console.log("yes it is not a leap year")

//         }
//     }else{
//         console.log("yes it is leap year")
//     }
// }else{
//     console.log("not a leap year");
// }



// truth / and falsly value 
//" "
//undefine
//null
//0
//NaN

// if (""){
//     console.log("we loss the game");
// }else{
//     console.log("we win the game")
// }


//ternary operator

// var age=10;
// console.log((age>20)?"you can vote":"you can not votes");


// loop

// var i=0
// while (i<=100){
//     console.log(i)
//     i++
// }

// do while loop

// var i=0;
// do{
//     console.log(i)
//     i++

// }while (i<=10)


// for loop
// for (let i=0;i<=10;i++){
//     console.log(i);
// }


// for (let i=1;i<10;i++){
//     console.log(i)
// }


// var a=20;
// console.log((a>2)?"yes a is greater":"b is less then a")


// for (let i=1;i<=10;i++){
//     var b=2
//     console.log(b+"x"+i+"="+b)
// }


// var readlinesync=require("readline-sync")
// var a=readlinesync.questionInt("enter your number----")
// for (let i=1;i<=10;i++){
//     console.log(a+"x"+i+"="+a)
// }


// for off loop:---

// var Name=["shikhu","Neha",2,2.0]
// for (let i in Name){
//     console.log(i)

// }



// var Number=[2,4,5,6,7,8,9];
// for (let i in Number){
   
// }
// console.log(Number[6])






//FUNCTION IN JS


// function test(val){
//     if (val===7){
//         return "equal"
//     }
//     return "not equal"
// }
// test(console.log(10))


// function number(num){
//     if (num!=99){
//         return "yes it is equal"
//     }
//     return "not equal"
// }number(console.log(10))


// a=function (num){
//     if (num<5){
//         return "priya"
//     }else if (num<10){
//         return "small"
//     }else if (num<15){
//         return "Medium"
//     }else if (num<20){
//         return "Large"
//     }else{
//         return "huge"
//     }
// }
// console.log(a(35))



// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0]
//   } else if (strokes <= par - 2) {
//     return names[1]
//   } else if (strokes == par - 1) {
//     return names[2]
//   } else if (strokes == par) {
//     return names[3]
//   } else if (strokes == par + 1) {
//     return names[4]
//   } else if (strokes == par + 2) {
//     return names[5]
//   } else if (strokes >= par + 3) {
//     return names[6]
//   }
// }

// // Change these values to test
// console.log(golfScore(5, 8));



// function caseInSwitch(value){
//     const answer=""
//     switch (value) {
//         case 1:
//             answer="pihu"
//         case 2:
//             answer="neha"
//         case 3:
//             answer="pooja"
//         case 4:
//             answer="asma"
//         case 5:
//             answer="ujala"
//         case 6:
//             answer="preeti"
//             break;
//         default:
//             "Riya is made"
//     }
//     return answer
// }
// console.log(caseInSwitch(3));



// function animals(val){
//     let answer=" "
//     switch (val) {
//         case "a":
//             answer="apple"
//             break
//         case "b":
//             answer="brid"
//             break
//         case "c":
//             answer="cat"
//             break
//         default:
//             answer="stuff"
//     }
//     return answer
// }
// console.log(animals("pig"))




// function switchOfStuff(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val){
//       case "a":
//         answer="apple"
//         break
//       case "b":
//         answer="bird"
//         break
//       case "c":
//         answer="cat"
//         break
//       default:
//         answer="stuff"
//     }
  
  
//     // Only change code above this line
//     return answer;
//   }
  
//   switchOfStuff(1);




// let arr=[]
// for (let i=1;i<10;i+=2){
//   arr.push(i)

// }
// console.log(arr);



// let myArray =[]
// for (let i=10;i>0;i-=2){
//   myArray.push(i)
// }
// console.log(myArray)


// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// console.log(ourArray)


const myArr = [2, 3, 4, 5, 6];
i<myArri<myArr