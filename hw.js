// Напишите функцию, проверяющую является ли число простым или нет. 
// На вход дается число, возвращается true/false.

function test_prime(n) {

    if (n===1)  {
      return false;
    }
    else if(n === 2)  {
      return true;
    } else   {
      for(var x = 2; x < n; x++)  {
        if(n % x === 0) {
          return false;
        }
      }
      return true;  
    }
  }
  
console.log(test_prime(6));



// Напишите функцию выводящую множители положительного целого числа. 
// На вход дается число, вывод массив множителей.
