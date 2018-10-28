function sumOfOther(...args) {
  let results=[], sum=args.reduce((sum,current)=> sum+current);
  args.forEach((element)=>results.push(sum-element));
  return results;
}