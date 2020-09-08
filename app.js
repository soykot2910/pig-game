
    var dice,tolDice,diceImg,curent0,curent1,score1,score0,scores,roundScore,activePlayer;
        
    curent0=document.getElementById('current-0');
    curent1=document.getElementById('current-1');

    score0=document.getElementById('score-0');
    score1=document.getElementById('score-1');
    rolDice=document.querySelector('.btn-roll');
    diceImg=document.querySelector('.dice');

    init();

 
rolDice.addEventListener("click",function(){

    dice=Math.floor(Math.random()*6)+1;
    diceImg.style.display='block';
    diceImg.src='images/dice-'+dice +'.png';
    
    if(dice!==1)
    {
      roundScore +=dice;
      document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }
    else
    {
       nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
       
      scores[activePlayer] +=roundScore;
      document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
       
      if(scores[activePlayer]>=20)
      {
          document.querySelector('#name-'+activePlayer).textContent='Winner!';
          document.querySelector('.dice').style.display='none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      }
      else{
        nextPlayer();
      }
});

function nextPlayer(){
    activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;

    curent0.textContent="0";
    curent1.textContent="0";

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // diceImg.style.display='none';
};

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    
    
    diceImg.style.display='none';
    curent0.textContent="0";
    curent1.textContent="0";
    score0.textContent="0";
    score1.textContent="0";
    
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.add('active');
};
