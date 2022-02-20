// function max(array){
//     var max=array[0]
//     for (let i=1;i<array.length;i++){
//         if (array[i]>max){
//             max=array[i]
//         }
        
//     }return (max)
// }console.log(max([4,12,3,8,0,22,56]))



function maxNumber(arr){
    var max=arr[0]
    for (let i=0;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i]
        }
    }return (max)
}console.log(maxNumber([50, 40, 23, 70, 56, 12, 5, 10, 7]))


