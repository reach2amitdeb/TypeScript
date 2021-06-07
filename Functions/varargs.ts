//Rest Param
var product = function(...nums) {
    
    var result = 1;

    for(var i=0;i<nums.length;i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

//can take any parameter
console.log(product(2,3,4,5));

//Rest Param should be last parameter in the array
// var product1 = function(x:number,y:number,...nums:number[]) {
    
//     var result = 1;

//     for(var i=0;i<nums.length;i++) {
//         console.log(nums[i]);
//         result *= nums[i];
//     }
//     return result;
// }

// //can take any parameter
// console.log(product(2,3,4,5));