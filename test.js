// const bubbleSortTest = (arr) => {
//     for(let i = arr.length; i> 0; i--){
//         for(let j = 0; j< i;j++){
//             console.log({i, j, arr1:arr[i-1], arr2: arr[j]});
//             if(arr[j]>arr[i-1]){
//                 temp = arr[j]
//                 arr[j] = arr[i - 1]
//                 arr[i-1] = temp
//             }
//         }
//     }
//     console.log(arr);
//     return arr
// }

//bubbleSortTest([10,7,11,9,5,4,1])

const selectionSortTest = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let min = arr[i]
        console.log({b4com:min});

        for(let j= 1; j< arr.length; j++){
            console.log({i, j, arr1:arr[i], arr2: arr[j]});
            if(min > arr[j]){
                min = arr[j]
                console.log({min});
            }
        }
        console.log("b4Swap: ",arr[i], min);
        temp = min
        arr[i] = min
    }
    console.log(arr);
    return arr
}

selectionSortTest([10,7,11,9,5,4,1])