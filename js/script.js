const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
let contador = document.querySelector('.counter');
let playAgain = document.querySelector('.play-again');
let music = document.querySelector('.music');

let count = 0;

const pointCounter = setInterval(() => {
    count++
    contador.innerText = count;
}, 10)

const jump = () => {
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (marioPosition == 0) {
        jumpSound = document.querySelector('.jump');;
        jumpSound.src = '/sounds/jump.mp3';
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        const gameOver = document.querySelector('.game-over').style.display = 'block';

        playAgain.classList.add('show');
        music.src = './sounds/death.mp3';

        clearInterval(loop);
        clearInterval(pointCounter);
    }
}, 10);

const play = () => {
    document.location.reload(true)
}

document.addEventListener('keydown', jump);
