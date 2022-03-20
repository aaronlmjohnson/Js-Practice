export const sentenceCase = (str)=>{
    return str.split('').map((char, i)=> i == 0 ? char.toUpperCase() : char).join('');
};

export const reverseString = (str)=>{ 
   return str.split('').reduce((total, char, i)=>total + str[-i + (str.length-1)], '');
}

export const Calculator = (()=>{
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    return {add, subtract, multiply, divide}
})();

export const caesarCipher = (str, shift = 1)=>{
    return str.split('').map((char)=>{
        if(char.match(/[a-zA-Z]/)){
            let encryptedChar = numToChar(((charToNum(char)+ shift) % 26));
            return isUpperCase(char) ? encryptedChar.toUpperCase() : encryptedChar;
        } else 
            return char;
    }).join('');
};

export const analyzeArray = (arr)=>{
    return {
        average: (arr.reduce((total, num)=> total+num, 0) / arr.length),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
};

const charToNum = (char)=> 
    'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase());

const numToChar = (num) => 'abcdefghijklmnopqrstuvwxyz'[num];

const isUpperCase = (char) => char.toUpperCase() === char;

