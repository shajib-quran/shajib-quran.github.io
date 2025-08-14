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

document.querySelector('.body').innerHTML = '';
document.querySelector('.body').innerHTML = `
  <h2>Available Courses</h2>
  <div class="course-card">
    <h3>Qur’anic Arabic</h3>
    <p>Learn Arabic to understand the Qur’an directly.</p>
    <button onclick="loadCourse('quranic-arabic')">Start Course</button>
  </div>
  <div class="course-card">
    <h3>Hadith Foundations</h3>
    <p>Explore the science and authenticity of Hadith.</p>
  </div>
`;
