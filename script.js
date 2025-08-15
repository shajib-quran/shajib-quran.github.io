const sections = {
  courses: `
    <h2>Qur’anic Arabic Courses</h2>
    <div class="course-grid">
      <div class="course-card">
        <div class="course-icon">🔰</div>
        <h3>Beginners Arabic</h3>
      </div>
      <div class="course-card">
        <div class="course-icon">📘</div>
        <h3>Intermediate Arabic</h3>
      </div>
      <div class="course-card">
        <div class="course-icon">🧠</div>
        <h3>Advanced Arabic</h3>
      </div>
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
