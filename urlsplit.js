const extractUrl = (url) => {
    const domain = url.split("//").pop().split(".")
    
    if(domain[0] == "www"){
        console.log(domain[1]);
        return domain[1]
    }
    else{
        console.log(domain[0]);
        domain[0]
    }
}

extractUrl("http://www.cnet.com")

const sumArr = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((prev, arr)=> prev + arr, 0)
}
console.log(sumArr([5,5,5], [5,5,5]))