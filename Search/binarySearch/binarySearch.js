const binarySearch = (arr, val) => {
    const sortedArray = arr.sort((a, b)=> a-b)
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2)
    console.log("middle:", middle);

    while (start <= end) {
        if(val == arr[middle]){
            console.log(middle);
            return arr[middle]
        }
        else if (val < arr[middle]) {
            end = middle - 1;
            console.log("end:", end);
        }
        else{
            start = middle + 1;
            console.log("start:", start);
            console.log("middle:", middle);

        }
        middle = Math.floor((start + end)/2)

    }
    console.log("empty");
    return -1
}

binarySearch([1,2,3,4,5],7) // 2
