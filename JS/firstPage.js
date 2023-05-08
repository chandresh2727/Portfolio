
// JS File

var btn = document.getElementById('btn');
document.body.classList.add('day');

btn.onclick = function() {
  document.body.classList.toggle('night');
  document.body.classList.toggle('day');
}
