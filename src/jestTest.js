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

export const caesarCipher = ()=>{

};

export const analyzeArray = ()=>{

};

