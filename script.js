const sections = {
  courses: `
    <h2>Qur’anic Arabic Courses</h2>
    <div class="course-row">
      <div class="course-box">
        <div class="course-icon">🔰</div>
        <div class="course-title">Beginners Arabic</div>
      </div>
      <div class="course-box">
        <div class="course-icon">📘</div>
        <div class="course-title">Intermediate Arabic</div>
      </div>
      <div class="course-box">
        <div class="course-icon">🧠</div>
        <div class="course-title">Advanced Arabic</div>
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
