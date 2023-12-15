const nums = [1,2,3]

nums.reduce((accumulator, current, i) => {
  // console.log(i, num)
  console.log(accumulator, current);
  return accumulator + current
},0)
