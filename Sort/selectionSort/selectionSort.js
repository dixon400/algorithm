const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let lowest = i
        for(let j = i+ 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;

            }
        }
        if(i !== lowest){
            console.log(arr);
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
            console.log(arr);

        }
    }
    return arr;
}

selectionSort([10,7,11,9,5,4,1])