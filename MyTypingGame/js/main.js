'use strict'

{
  
  function setWord(){
    
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
    //.spliceは、抜き終わった残り(wordsの残り)になるのではなく、抜いたものが結果となる。つまり、初回にblueが抜かれたら、word=['red', 'pink']ではなく、word=['blue']となるので、抜かれたblueがconsole.logされる。
  }
  const words = [
    'red',
    'blue',
    'pink',
  ];
  
  
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');


  document.addEventListener('click', () => {
    if(isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  })

  document.addEventListener('keydown', e =>{
    if (e.key !== word[loc]){
      return;
    }
      loc++;

      target.textContent = '_'.repeat(loc) + word.substring(loc);

      if(loc === word.length){
        if (words.length === 0){
          const elapsedTime = ((Date.now() - startTime)/1000).toFixed(2);
          const result = document.getElementById('result');
          result.textContent = `Finished!  ${elapsedTime} seconds!`;
          return;
        }
        setWord();
      }
    
  });
}


//150*10^(-3)kg = 0.150kg= 150g