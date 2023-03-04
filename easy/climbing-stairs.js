export const climbingStairs = () => {
  let index = 1;
  
  let prev = 0;
  let next = 1;

  while (index <= n) {
    let temp = next
    next = prev + next
    prev = temp
    index++
  }

  return next
}