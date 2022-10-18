 function findComplement(num) {
    let result = 0;
    
    // Convert number to binary string.
    let bits = num.toString(2);
    let complement = '';

    // Create opposite binary string for complement.
    for (let i=0; i<bits.length; i++) {
        complement += bits[i] === '0' ? '1' : '0';
    }

    // Convert binary string back into a number.
    result = parseInt(complement, 2);
    
    return result;
};
let result=findComplement(100)
console.log(result);