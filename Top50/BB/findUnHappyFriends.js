
/*
You are given a list of preferences for n friends, where n is always even.

For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

x prefers u over y, and
u prefers x over v.
Return the number of unhappy friends.

 

Example 1:

Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.
*/
var unhappyFriends = function(n, preferences, pairs) {
    /*
    Create a matrix “rank” where rank[i][j] holds how highly friend ‘i' views ‘j’. 
    This allows for O(1) comparisons between people
    
    this tells us how happy each members are with their partner
p1 - p2 - rank
0 - 1 - 0
1 - 0 - 2
2 - 3 - 0
3 - 2 - 1
==> ranks: [0, 2, 0, 1]
    */
    
    let ranks = new Array(n); // save each person a room
    
    for (let [i, j] of pairs) {
        // save each partner's ranks
        ranks[i] = preferences[i].indexOf(j);
        ranks[j] = preferences[j].indexOf(i);
    }
    
    let countUnhappy = 0;
    // ranks: [0, 2, 0, 1]
    //check on each person's preferences especially one's possible preferred partners' rank of this person 
    for (let person =0; person<n; person++) {
        for (let otherPartnersRank = 0; otherPartnersRank<ranks[person]; otherPartnersRank++) {
            //[3, 2, 0] partner is 3, 2
            let partner = preferences[person][otherPartnersRank];
            // check partner's rank of this person < current happyness of the the partner
            if(preferences[partner].indexOf(person) < ranks[partner]) {
               //if the current rank of the one's more preferred partner greater(bad)
                // than what you make of with potential partner then you are unhappy
                countUnhappy++;
                break;
            }
        }
    }
    return countUnhappy;
};