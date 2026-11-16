const quotes = [
  'Small steps, taken daily, build large programs.',
  'Make it work, then make it clear, then make it fast.',
  'A bug is just a lesson with a stack trace.',
  'Read the error message twice before searching it once.',
  'Name things for the reader you will be next month.',
  'Simple code is not easy code. It is code someone worked on.',
  'Test the boring cases first. They break the most.',
  'Ship the small version. Learn from real users.',
  'Comments explain why. Code explains how.',
  'Take a break. Half of debugging is rest.'
];
const quoteEl = document.getElementById('quote');
const msg = document.getElementById('msg');
let last = -1;
function show() {
  let i;
  do { i = Math.floor(Math.random() * quotes.length); } while (i === last);
  last = i;
  quoteEl.classList.add('fade');
  setTimeout(function () {
    quoteEl.textContent = quotes[i];
    quoteEl.classList.remove('fade');
  }, 200);
  msg.textContent = '';
}
document.getElementById('next').addEventListener('click', show);
document.getElementById('copy').addEventListener('click', function () {
  navigator.clipboard.writeText(quoteEl.textContent).then(function () {
    msg.textContent = 'Copied!';
  }, function () {
    msg.textContent = 'Copy is not allowed here.';
  });
});
last = Math.floor(Math.random() * quotes.length);
quoteEl.textContent = quotes[last];
