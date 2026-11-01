// const isPrime = n => {  // Arrow-function implementation: freeCodeCamp's tests did not recognise it.
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
