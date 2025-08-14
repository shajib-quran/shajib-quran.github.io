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

const sections = {
  courses: `
    <h2>Available Courses</h2>
    <div class="course-card">
      <h3>Qur’anic Arabic</h3>
      <p>Learn Arabic to understand the Qur’an directly.</p>
      <button onclick="startCourse('quranic-arabic')">Start Course</button>
    </div>
  `,
  study: `
    <h2>Study Guide</h2>
    <p>Explore thematic breakdowns, memorization tips, and tafsir references.</p>
  `,
  community: `
    <h2>Community</h2>
    <p>Connect with fellow learners, share reflections, and track progress.</p>
  `
};

function loadSection(sectionName) {
  const body = document.querySelector('.body');
  body.innerHTML = sections[sectionName] || '<p>Section not found.</p>';
  body.classList.add('fade-in');

  setTimeout(() => {
    body.classList.remove('fade-in');
  }, 300);
}

window.onload = () => {
  loadSection('courses');
};
