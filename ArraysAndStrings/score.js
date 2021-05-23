/* This is a dice game where you roll up to five dice to accumulate
points. The following “score” function will be used calculate the
score of a single roll of the dice.
A roll is scored as follows:
* A set of three ones is 1000 points (three of those five dice have ones) 
* A set of three numbers (other than ones) is worth 100 times the
number. (e.g. three fives is 500 points).
* A one (that is not part of a set of three) is worth 100 points.
* A five (that is not part of a set of three) is worth 50 points.
* Everything else is worth 0 points.

Objective: is to come up with an algorithm (or write pseudo code) for the score function

Examples:
score([1,1,1,5,1]) => 1150 points
score([2,3,4,6,2]) => 0 points
score([3,4,5,3,3]) => 350 points
score([1,5,1,2,4]) => 250 points 
score([4,2,4,1,4]) =>   

// go through the array and 
  */ 

function score(dice) {
    let note = {
                1:0,
                2:0,
                3:0,
                4:0,
                5:0,
                6:0
            }

    let totalScore = 0;

    for (let i=0; i<dice.length; i++) {
      //increment the number 
      let number = dice[i];
      if (note[number]) note[number]++
      if (note[number] >= 3) totalScore += (number * 100)
    }

    for (let i=0; i<6; i++) {
        //increment the number 
        let number = i+1;
        if (note[number] >= 3) totalScore += (number * 100)
    }
    //A set of three ones is 1000 points (three of those five dice have ones)
    if (note[1]>=3) totalScore += 1000
    //  A one (that is not part of a set of three) is worth 100 points.
    if (note[1] -3 === 1) totalScore += 100
    // A five (that is not part of a set of three) is worth 50 points.
    if (note[5] -3 === 1) totalScore += 50
}