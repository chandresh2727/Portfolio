// JS File

var btn = document.getElementById('btn');
document.body.classList.add('day');

btn.onclick = function() {
  document.body.classList.toggle('night');
  document.body.classList.toggle('day');
}

            var img_array = ['https://cdn-icons-png.flaticon.com/128/606/606807.png', 'https://cdn-icons-png.flaticon.com/128/869/869869.png'];

            function darkImg() {
                //                document.getElementById("myImg").src = 'https://cdn-icons-png.flaticon.com/128/869/869869.png';
                var current = img_array.indexOf(this.src);
                this.src = img_array[current + 1 === img_array.length ? 0 : current + 1];
            }

            document.getElementById('myImg').addEventListener('click', darkImg);

            var btn = document.getElementById('btn');
            document.body.classList.add('day');

            btn.onclick = function () {
                document.body.classList.toggle('night');
                document.body.classList.toggle('day');
            }

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

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
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }}


// Language Experience 


const phrases = [
'Java Developer',
'Web Developer',
'Blockchain Developer',
'Android Developer',
'Full stack Developer'];


const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1800);
  });
  counter = (counter + 1) % phrases.length;
};

next();


// This is for an Hover event 
const nameOfUserElement = document.querySelector('.nameOfUser');


nameOfUserElement.addEventListener('mouseenter', () => {
  nameOfUserElement.textContent = 'coder chandresh';
});


nameOfUserElement.addEventListener('mouseleave', () => {
  nameOfUserElement.textContent = 'chandresh';
});
