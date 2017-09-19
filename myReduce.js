// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //

var newArr = [0];

for(i=1;i<arr.length;i++) {
	newArr = callback(newArr, arr[i], i, arr);
}

return newArr;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
