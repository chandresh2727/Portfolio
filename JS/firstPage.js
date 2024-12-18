// Theme Toggle Button
const btn = document.getElementById('btn');
const body = document.body;
const themeImages = [
  'https://cdn-icons-png.flaticon.com/128/606/606807.png',
  'https://cdn-icons-png.flaticon.com/128/869/869869.png'
];

// Toggle Theme (Day/Night)
body.classList.add('day');
btn.addEventListener('click', () => {
  body.classList.toggle('night');
  body.classList.toggle('day');
});

// Image Toggle Function
const imgElement = document.getElementById('myImg');
imgElement.addEventListener('click', toggleImage);

function toggleImage() {
  const currentSrc = imgElement.src;
  const nextSrc = themeImages[(themeImages.indexOf(currentSrc) + 1) % themeImages.length];
  imgElement.src = nextSrc;
}

// Text Scramble Effect
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];

    // Create queue for animation sequence
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    // Loop through the queue to update text
    for (let i = 0; i < this.queue.length; i++) {
      const { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        const randomChar = Math.random() < 0.27 ? this.randomChar() : char;
        this.queue[i].char = randomChar;
        output += `<span class="dud">${randomChar}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    // Resolve promise when all letters are complete
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Phrases for the Text Scramble Effect
const phrases = [
  'Java Developer',
  'Web Developer',
  'Blockchain Developer',
  // 'Android Developer',
  'Full Stack Developer'
];

const el = document.querySelector('.text');
const fx = new TextScramble(el);
let counter = 0;

// Rotate through phrases
function rotatePhrases() {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(rotatePhrases, 1500);
  });
  counter = (counter + 1) % phrases.length;
}

rotatePhrases();

// Hover event for User Name
const nameOfUserElement = document.querySelector('.nameOfUser');

nameOfUserElement.addEventListener('mouseenter', () => {
  nameOfUserElement.textContent = 'Coder Chandresh';
});

nameOfUserElement.addEventListener('mouseleave', () => {
  nameOfUserElement.textContent = "Hi, I'm Chandresh";
});
