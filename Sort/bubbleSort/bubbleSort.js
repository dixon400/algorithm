const bubbleSort = (arr) => {
    let noSwap = true;
    for (let i = arr.length; i > 0; i--) {
       for (let j = 0; j < i - 1; j++) {
         if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
            noSwap = false;
         }
      }
      if(noSwap) break;
    }
    console.log(arr);
    return arr;
}
//O(n^2)
bubbleSort([10,7,11,9,5,4,1])