// var myFun=(a,b,c)=>{ 
//     console.log(a+b+c);
// }
// myFun(1,2,3)

// var myarrow=(name)=>{
//     console.log(name,"my name is preeti")

// }
// myarrow("preeti","servada","rani")


// var a=function(name){
//     console.log(name+" my name is ")

// }
// a("preeti","singh","noida")

// arrow function with default parameter :------
// var fun=(a,b=30)=>{
//     console.log(a,b)
// }
// fun(2,45,)


// arrow function with rest function:---

// var value= (b="preeti",...d)=>{
//     console.log(b+d)
// }
// value("neha",2,3,4,5,67)



// using one arugument

// var value=b=>{console.log(b);
// console.log("i like to eat sadhwich");}

// value("neha")
// value("neha")
// value("neha")


// var value=b=>{console.log(b);
//     console.log("i like to eat sadhwich");}






// var value2=(a,b)=>{return a+b}
// console.log(value2(20,80));


// var a=["a","b",["c",["d","e"],["j","g"],"k"],"l","m","n"]
// var i=0;
// while (i<a.length){
//     if 
// }


// function myName () {
//     var x = "Hello!! Nayak"; 
//     console.log(x);
// }myName();
   

// (function myName () {
//     var x = "Hello!! Nayak";  // I will invoke myself
//     	console.log(x);
//     })();


// (function name(name){
//     var x="my name is "+name;
//     console.log(x);
//     })("preeti")



// (function name(a,b,c){
//     var y=a+b+c;
//     console.log(y);
// })(10,20,30)




// function sum(ar){
//     var sum=0;
//     for (var i of ar){
//         sum=sum+i
//     }return sum
// }console.log(sum([1,2,3,4,10,11]));




// function sum(arr){
//     var i=0;
//     var sum=0
//     while (i<arr.length){
//         sum=sum+arr[i]
//         i++
//     }return sum
// }console.log(sum([1,2,3,4,10,11]))

var list=[2,3,4,6,8,10]
var i=0
var a=[]
var b=[]
while(i<list.length){
     if(list.includes(list[i])){
        a.push(list[i])
        a.push(list[i+1])
    }
        b.push(a)
        i=i+2
        a=[]
   
}
console.log(b)