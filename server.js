// server.js
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Sample route to fetch verses
app.get('/api/quran/:SurahVerse', async (req, res) => {
  const { SurahVerse } = req.params;

  const { data, error } = await supabase
    .from('AlQuranFullFile')
    .select('*')
    .eq('SurahVerse', SurahVerse)
    .single(); // Ensures only one record is returned

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.get('/', (req, res) => {
  res.send('Qur’anic backend is running!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
