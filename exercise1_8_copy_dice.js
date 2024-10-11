// FIRST DICE SIX FACES
function rollDice(dice) {
    if (dice==10)
      return Math.floor(Math.random() * 10) + 1;  
  
   else   
      return Math.floor(Math.random() * 6) + 1;
    }
  
  
  console.log(rollDice(1));
  console.log(rollDice(10));
  
  
  // DONE BY DHUFR AL_HASANI.
  