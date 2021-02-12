function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0
  const frequence = {}
  const half = Math.floor(A.length / 2)

  let leaderFrequence = 0
  let leaderValue = 0
  // find the leader in array A and how many times it occurs in the array.
  for (let i = 0; i < A.length; i++) {
    if (frequence[A[i]] === undefined) {
      frequence[A[i]] = [i]
    } else {
      frequence[A[i]].push(i)
    }
    if (frequence[A[i]].length > half && frequence[A[i]].length > leaderFrequence) {
      leaderFrequence = frequence[A[i]].length
      leaderValue = A[i]
    }
  }

  //start on left side, count leaders to the left and inclusive of the current index,
  //calculate the length of right side by taking total length minus left length
  //leaders in right side is the difference between total leaders and number of left leaders
  let numOfLeaderInLeft = 0;
  for (let j = 0; j < A.length; j++) {

    //length of left array
    const leftLen = j + 1

    //num of leaders in the left array
    if (A[j] === leaderValue) numOfLeaderInLeft++

    //length of right array
    const rightLen = A.length - leftLen

    // num of leaders in the right array
    const numOfLeaderInRight = leaderFrequence - numOfLeaderInLeft

    if (numOfLeaderInLeft > Math.floor(leftLen / 2) && numOfLeaderInRight > Math.floor(rightLen / 2)) {
      result++
    }
  }

  return result
}
