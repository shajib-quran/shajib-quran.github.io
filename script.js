async function loadVerses() {
  const surah = document.getElementById('surahInput').value;
  const response = await fetch(`/api/quran?surah=${encodeURIComponent(surah)}`);
  const verses = await response.json();

  const container = document.getElementById('verseContainer');
  container.innerHTML = ''; // Clear previous results

  verses.forEach(v => {
    const verseEl = document.createElement('div');
    verseEl.innerHTML = `
      <p><strong>Ayah ${v.ayah_number}</strong></p>
      <p>Arabic: ${v.text_ar}</p>
      <p>English: ${v.text_en}</p>
      <hr>
    `;
    container.appendChild(verseEl);
  });
}
