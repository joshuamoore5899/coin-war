document.querySelector('#heads').addEventListener('click', heads);
document.querySelector('#tails').addEventListener('click', tails);
document.querySelector('#reset').addEventListener('click', reset);



if (localStorage.getItem('count')) {
  let count = localStorage.getItem('count')
  document.querySelector('#score').innerText = count;
}
else {
  let count = 0;
  console.log('No');
  localStorage.setItem('count', count);
  document.querySelector('#score').innerText = count;
}


if (localStorage.getItem('computer-count')) {
  let computerCount = localStorage.getItem('computer-count');
  document.querySelector('#computer-score').innerText = computerCount;
}
else {
  let computerCount = 0;
  console.log('No');
  localStorage.setItem('computer-count', computerCount);
  document.querySelector('#computer-score').innerText = computerCount;
}


function reset() {
  count = 0;
  computerCount = 0;
  localStorage.setItem('count', count);
  localStorage.setItem('computer-count', computerCount);
  document.querySelector('h3').innerText = "";
  document.querySelector('#result-img').src = '#';
  document.querySelector('#score').innerText = count;
  document.querySelector('#computer-score').innerText = computerCount;
}

async function heads() {
    const userGuess = 'HEADS';
    const res = await fetch('/api');
    const data = await res.json();

    let result = data.result;
    if (result === "TAILS") {
      document.querySelector('#result-img').src = '/images/tails.jpg';
    }
    else {
      document.querySelector('#result-img').src = '/images/heads.jpg';
    }
    // document.querySelector('span').innerText = result;
    if (result === userGuess) {
      document.querySelector('h3').innerText = 'You win!';
      count = localStorage.getItem('count');
      count++;
      localStorage.setItem('count', count);
      document.querySelector('#score').innerText = count;
    }
    else {
      document.querySelector('h3').innerText = 'You lose!';
      computerCount = localStorage.getItem('computer-count');
      computerCount++;
      localStorage.setItem('computer-count', computerCount);
      document.querySelector('#computer-score').innerText = computerCount;
    }
}

async function tails() {
    const userGuess = 'TAILS';
    const res = await fetch('/api');
    const data = await res.json();

    let result = data.result;
    if (result === "TAILS") {
      document.querySelector('#result-img').src = '/images/tails.jpg';
    }
    else {
      document.querySelector('#result-img').src = '/images/heads.jpg';
    }
    // document.querySelector('span').innerText = result;
    if (result === userGuess) {
      document.querySelector('h3').innerText = 'You win!';
      count = localStorage.getItem('count');
      count++;
      localStorage.setItem('count', count);
      document.querySelector('#score').innerText = count;
    }
    else {
      document.querySelector('h3').innerText = 'You lose!';
      computerCount = localStorage.getItem('computer-count');
      computerCount++;
      localStorage.setItem('computer-count', computerCount);
      document.querySelector('#computer-score').innerText = computerCount;
    }
}
