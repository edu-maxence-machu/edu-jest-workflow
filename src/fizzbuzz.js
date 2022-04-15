export const fizzbuzz = (nb)=>{
    if(nb % 15 === 0) {return 'FizzBuzz'} 
    if(nb % 5 === 0) {return 'Buzz'} 
    if(nb % 3 === 0) {return 'Fizz'} 
    
    return nb
  }
  export const getClassFromResult = (result) => {
    if(result === 'Fizz'){return 'fizz'};
    if(result === 'Buzz'){return 'buzz'};
    if(result === 'FizzBuzz'){return 'fizz buzz'};
    return '';
  }
