module.exports = class Compute {
    computeFactorial(num) {
        if (num <= 0) {return 1} 
        else if (num ==1) {return 1}
        else { 
          let factorial = 1;  
            for (let i = num; i >= 1; i--) 
             {  factorial = factorial * i;  }
         return  factorial;
    }
}
}