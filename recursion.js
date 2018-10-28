/*function recursion(tree) {
  var level=0, 
  let result=[]; 
  let {value, left, right}=tree;
  result[level] = (result[level]==undefined)? result[level]=value : [...result[level],value];
  level++;
  if(left!=undefined)
  result[level] = (result[level]==undefined)? result[level]=recursion(left) : [...result[level],recursion(left)];
  if(right!=undefined)
  result[level] = (result[level]==undefined)? result[level]=recursion(right) : [...result[level],recursion(right)];
}*/

function recursion(tree) {
  if (tree==undefined) return;
  let result=[], {value, left, right}=tree;
  result.push(value);
  result.push(recursion(left).concat(recursion(right)));
  return result;
}

let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]