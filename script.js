async function loadVerse(SurahVerse) {
  const response = await fetch(`/api/quran/${SurahVerse}`);
  const verse = await response.json();

  const container = document.getElementById('verseContainer');
  container.innerHTML = `
    <p><strong>${SurahVerse}</strong></p>
    <p>Arabic: ${verse.text_ar}</p>
    <p>English: ${verse.text_en}</p>
  `;
}
