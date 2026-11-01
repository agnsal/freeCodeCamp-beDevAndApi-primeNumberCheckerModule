// const isPrime = n => {  // Not recognised by FreeCodeCamp's tests
//     if(!Number.isInteger(n) || n < 2) return false;
//     const limit = Math.sqrt(n);
//     for(let i=2; i<=limit; i++){
//         if(n % i === 0) return false;
//     }
//     return true;
// };

function isPrime(n) {
    if(!Number.isInteger(n) || n < 2) return false;
    const limit = Math.sqrt(n);
    for(let i=2; i<=limit; i++){
        if(n % i === 0) return false;
    }
    return true;
}

module.exports = {
    isPrime
};
