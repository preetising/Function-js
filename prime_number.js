var readlineSync=require("readline-sync");
var num=readlineSync.question("Enter your number------")
function prime(){
    var i=2;
    while (i<num){
        var j=2;
        var count=0;
        while (j<i){
            if (i%j==0){
                count=+1
            }j++
        }if (count==0){
            console.log(i);
        }
        i++

    }
}prime()