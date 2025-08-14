async function loadVerse(SurahVerse) {
  const response = await fetch(`/api/quran/${SurahVerse}`);
  const verse = await response.json();

  const container = document.getElementById('verseContainer');
  container.innerHTML = `
    <h2>${verse.SurahName}</h2>
    <p><strong>Arabic:</strong> ${verse.VerseArabicText}</p>
    <p><strong>Meaning:</strong> ${verse.VerseMeaning}</p>
  `;
}
