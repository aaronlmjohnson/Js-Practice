it('capitalizes first character', ()=>{
    expect(sentenceCase('cake').toBe('Cake'));
});

it('reverse the string', ()=>{
    expect(reverseString('cake').toBe('ekac'));

    expect(reverseString('cakes').toBe('sekac'));
});


describe('Calculator module', ()=>{

    it('can add two numbers', ()=>{
        expect(Calculator.sum(2, 2).toBe(4));
    });

    it('can subtract two numbers', ()=>{
        expect(Calculator.subtract(8, 4).toBe(4));
    });

    it('can multiply two numbers', ()=>{
        expect(Calculator.multiply(8, 4).toBe(32));
    });

    it('can divide two numbers', ()=>{
        expect(Calculator.divide(8, 4).toBe(2));
    });

});

describe('Caesar Cipher funciton', ()=>{
    it('wraps letters', ()=>{
        expect(caesarCipher('zebra cake').toBe('afcsb dblf'));
    });

    it('keeps case intact', ()=>{
        expect(caesarCipher('ZeBrA cAkE').toBe('AfCsB dBlF'));
    });

    it('works with punctuation', ()=>{
        expect(caesarCipher('zebra cake!').toBe('afcsb dblf!'));
    });

    it('works with multiple shift', ()=>{
        expect(caesarCipher('zebra cake', 3).toBe('cheud fdnh'));
    });
})


