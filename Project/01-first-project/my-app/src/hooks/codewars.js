const calculate = (...args1) => (...args2) => {
   let sum = [...args1, ...args2].reduce((s, v) => s + v);
   console.log(sum);
}

calculate(1, 2, 3)(2, 5);