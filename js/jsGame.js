const score =  JSON.parse( localStorage.getItem('score')) || 
{
  losses: 0,
  wins: 0,
  ties: 0
};
updateScore();


let trying = JSON.parse(localStorage.getItem('trying')) || 0 ;
document.querySelector('.js-trying').innerHTML= trying;


function playGame(yourChose) {

  if(score.wins === 3 || score.losses===3){
    resetScore();
    alert(`dali sayfayi komple ss çekip gruba göndermen lazim - yeniden oynarsan veya resetlersen aşağıdaki sayı artar- anlaşılır-kazanirsan ilk seçim veya sona kalan 3 kişiden 2 kişiyi tercih etme hakkı senin olur - vice versa`);
    return;
  }
  
  const computerPick = computerChose()
  let result = ''
  if (yourChose === 'Scissors') {
    if (computerPick === 'Scissors'){
      result='Tie';
    }else if (computerPick === 'Rock'){
      result='Lost';
    }else if (computerPick === 'Paper'){
      result='Won';
    }

  } else if (yourChose === 'Paper') {
    if (computerPick === 'Scissors'){
      result='Lost';
    }else if (computerPick === 'Rock'){
      result='Won';
    }else if (computerPick === 'Paper'){
      result='Tie';
    }

  } else if (yourChose === 'Rock') {
    if (computerPick === 'Scissors'){
      result='Won';
    }else if (computerPick === 'Rock'){
      result='Tie';
    }else if (computerPick === 'Paper'){
      result='Lost';
    }
  }

  if (result=== "Won") {
    score.wins ++ ;
  } else if (result=== "Lost") {
    score.losses ++ ;
  } else if (result === 'Tie') {
    score.ties ++;
  }

  updateScore();
 
  localStorage.setItem('score',JSON.stringify(score));
  
  document.querySelector('.js-result')
   .innerHTML = result;

  document.querySelector('.js-moves').innerHTML=
    `You 
    <img src="emojis/${yourChose}-emoji.png" class="game-emoji">
    <img src="emojis/${computerPick}-emoji.png" class="game-emoji">
    PC`
}


function resetScore() {
  score.losses = 0;
  score.wins=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScore();
  trying = trying+1;
  localStorage.setItem('trying',JSON.stringify(trying));
  document.querySelector('.js-trying').innerHTML= trying;
}

function updateScore() { document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`;
}

function computerChose() {
  const randomNumber= Math.random();
  let computerPick=''
  if (randomNumber>=0 && randomNumber<1/3) {
    computerPick='Rock';
  } else if (randomNumber >= 1/3 && randomNumber<2/3) {
    computerPick='Paper';
  } else {
    computerPick='Scissors';
  } 
  return computerPick;
}