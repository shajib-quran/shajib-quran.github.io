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
