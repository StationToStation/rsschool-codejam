function make(...a) {
  var currentArr = [];
  currentArr.push(...a);

  function f(...b) {
    if (b[0] instanceof Function) {
      return currentArr.reduce((result,element)=>b[0](result,element),0);
    }
    else currentArr.push(...b);
    return f;
  }

  f.toString = () => currentArr;

  return f;
}

function sum(a, b) {
  return a + b;
}