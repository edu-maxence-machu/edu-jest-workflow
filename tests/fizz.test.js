import {fizzbuzz, getClassFromResult} from '../src/fizzbuzz.js'
describe('FizzBuzz', () => {  
    
    let table = [];
    for(let i = 0; i < 100; i++){
        table[i] = i;
    }
     
    it.each(table)('fizzbuzz(%i)', (i) => {
        if(i % 5 === 0 && i % 3 === 0){
          expect(fizzbuzz(i)).toBe('FizzBuzz');
        } else if(i % 3 === 0){
          expect(fizzbuzz(i)).toBe('Fizz');
        } else if(i % 5 === 0){
          expect(fizzbuzz(i)).toBe('Buzz');
        } else {
          expect(fizzbuzz(i)).toBe(i);
        }
    });

    it('should return fizz buzz class', () => {
        expect(getClassFromResult('FizzBuzz')).toBe('fizz buzz')
    })

    it('should return fizz class', () => {
        expect(getClassFromResult('Fizz')).toBe('fizz')
    })

    it('should return buzz class', () => {
        expect(getClassFromResult('Buzz')).toBe('buzz')
    })

    it('should return nothing', () => {
        expect(getClassFromResult(4)).toBe('')
    })

    it('should not return buzz', () => {
        expect(getClassFromResult('Fizz')).not.toBe('buzz')
    })
})
