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

function numPlayers (k, scores) {
    if(k <= 0) return 0;
    //sort the array in reversed order 
      scores.sort((a, b) => b - a)
      let rank = 1;
      let res = 0;
      for(let i = 0; i < scores.length; i++) {
          if(i === 0) {
              rank = 1;
          } else if(scores[i] !== scores[i - 1]) {
              rank = i + 1;
          }
          if(rank <= k && scores[i] > 0) res++;
          else break;
      }
      return res;
  }
  
  
numPlayers (3,[100,50,50,25]) //3