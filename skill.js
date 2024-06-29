const skill = (N) => {
    let rounds = 0
    let carryOver = 0
    for(let i = 0; i<N.length+1; i++){
        let n = N[i]
        console.log({n});
        if(carryOver > 0 ) {
            n = N[i] + carryOver
            console.log("Before", n);
            rounds += carryOver
            carryOver -= carryOver
        }
        if(n > 10){
            carryOver += n - 10
            console.log({carryOver});
        }
        else if(n < 10 && N[i+1] > 10){
            console.log(N[i+1]);
            carryOver += N[i+1] -10;
            let x = 10 - n;
            rounds += n+ carryOver - 10;
            carryOver -= x
            i += 2
        }
        
        console.log({i});
    }
    return rounds
}

skills1 = [7,15,10,8]
console.log(skill(skills1));
// skills1 = [4, 2, 7, 3, 1, 8, 6, 5]
// skills2 = [4, 2, 1, 3]
// skills3 = [3, 4, 2, 1]