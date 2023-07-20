
const signNum = (arr) => {
    let count  = 1;
    let resp = arr.reduce((prev, val)=>{
        console.log({prev, val});
        return val * prev
    })
    console.log(resp);
    if(resp < 0){
        console.log(-1);
        return -1
    }
    else if(resp == 0){
        console.log(0);
        return 0;
    }
    else {
        console.log(1);
        return 1
    }
}
signNum([1, 2, 0, -5]);

function solution(A) {
    let negativeCount = 0;
    let hasZero = false;
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) {
        hasZero = true;
        break;
      } else if (A[i] < 0) {
        negativeCount++;
      }
    }
  
    if (hasZero) {
      return 0;
    } else {
      return negativeCount % 2 === 0 ? 1 : -1;
    }
  }
  

  console.log(solution([1, -2, -3, 5])); 
  console.log(solution([1, 2, 3, -5])); 
  console.log(solution([1, 2, 0, -5])); 


