/*
competiitiveGaming

https://leetcode.com/discuss/interview-question/850397/roblox-hackerrank-2021

a group of friends are playing a video game together. During the game, each player earns a number of points. At the end of a round,players who achieve at least a certain rank get to "level-up" their characters to gain inscreased abilities. Given the scores of the players at the end of a round, how many players will be able to level up?

Node: players with equal scores will have equal ranks, but the palyers with the next lower scores wiill be ranked based on the position within the list of all players' scores. For example. if there are four players, and three players tie for first place, their ranks are 1,1,1,and 4

Note: no player with a score of 0 can level up, regardless of rank 

e.g.

n= 4
k= 3
scores = [100, 50, 50, 25]
 */
// the key is to count the rank to make sure rank<= happens 
function numPlayers (k, scores) {
    if(k <= 0) return 0;
    //sort the array in reversed order 
      scores.sort((a, b) => b - a)
      let rank = 1;
      let res = 0;
      for(let i = 0; i < scores.length; i++) {
        //the highest scored deserves an level-up
          if(i === 0) {
              rank = 1;
          } else if(scores[i] !== scores[i - 1]) {
            // if the current element is not equal to the rank of the next person, then add 
              rank = i + 1;
          }
          // if ranking is smaller or equal to k(cap on level up) and current score is not 0 then increment res
          if(rank <= k && scores[i] > 0) res++;
          // if one of this condition does not meet, then break out of the for loop 
          //it is already sored and we don't level up 0s, so scores[i] === means that we don't have to be in the loop
          // if rank<=k means that we reached our cap. K is the max
          else break;
      }
      return res;
  }
  
  
  numPlayers (3,[100,50,50,25]) //3