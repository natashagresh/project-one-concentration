# project-one-concentration
I have decided to do the game concentration. The theme is Taylor Swift's latest album-1989.

**1.Overview and General Instructions:**
  *The game Concentration will involve 16 cards (laid out in a row of 4 x 4). There will overall be 8 different cards (as 8 * 2=16). You will have 12 tries to pick correctly and win. If you have reached 12 and still have not won, the game will need to be able to register that you have lost.  You will lose if it takes more than 13 times to pair the 16 cards together. 
   
  *If 8 cards have been matched, under 12 tries than the game will need to register that you have won the game. 
  
  *Depending on how complex I plan to make this. I might have it so that the game recognises the total games that have been played and the overall total score. Every game won=1 point, so after 10 games won, total score=10. The total games would equal overall games played. so if you played 10 games but only won 8, this would be total score=8, games played=10.
  
  *Under the header, there will be the 16 cards. Under this there will be a <reset> button. A draft of the layout can be seen in Wire Frames. 
    
**2.Step by Step Overview:**
 1. The game is laid out infront of you.
 2. Player is able to pick two cards from selection
 3. Cards flip over
 4. If cards are matching then they stay flipped over and "Matching!" pops up
 5. If cards arent matching, they turn back over and "Not Matching!" pops up
 6. Player had 12 tries to get 16 cards paired with their partner
 7. If able to match all 16 cards, then cards dissolve and a "You Won!" appears
 8. If unable to match cards after 12 tries, cards dissolve and a "You lost!" appears
 9. A reset button will allow you to restart game from beginning
 10. Otherwise you can play multiple games without reseting-new game will begin.

**3.List of technologies use:**
  HTML, CSS, JS and (JQuery?)
 
**4.PseudoCode**
 1. Do basic html. Set up CSS and classes/ids so that I have basic layout of game. Create boxes for [tries/matches] & [total score/games played]
 2. Will start with an array to log in all 16 cards
 3. Make a grid/boxes of cards
 3. Add Event Listener on cards
 4. Add Event Listener on Play Button
 5. Get cards to link with image classes. 
 6. Get cards to recognise faceup/facedown
 7. Get cards to stay faceup if 2 cards are matching/go facedown if not
 8. Get cards to recognise a loser after 26 tries
 9. Get cards to recognise a winner once all done!
 10. Et Voila! All done! Time to "shake it off" and sleep. 
  
**5.Wire Frame**
 1. [Beginning of Game](https://github.com/natashagresh/project-one-concentration/blob/gh-pages/Wire%20Frame%20Images/IMG_7176.JPG)
 2. [Won first move](https://github.com/natashagresh/project-one-concentration/blob/gh-pages/Wire%20Frame%20Images/IMG_7175.JPG)
 3. [Lost first move](https://github.com/natashagresh/project-one-concentration/blob/gh-pages/Wire%20Frame%20Images/IMG_7173.JPG)
 4. [First game won!](https://github.com/natashagresh/project-one-concentration/blob/gh-pages/Wire%20Frame%20Images/IMG_7174.JPG)
    
**6.Link to playable app:** 
....  

***Reference Links***
1.http://bost.ocks.org/mike/shuffle/

    
    
    
    

