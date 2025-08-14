const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');
const overlay = document.getElementById('overlay');

document.getElementById('toggle-left').onclick = () => {
  leftPanel.classList.toggle('open');
  overlay.classList.toggle('active');
};

document.getElementById('toggle-right').onclick = () => {
  rightPanel.classList.toggle('open');
  overlay.classList.toggle('active');
};

// Close panels when clicking outside
overlay.onclick = () => {
  leftPanel.classList.remove('open');
  rightPanel.classList.remove('open');
  overlay.classList.remove('active');
};
