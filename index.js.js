const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Vercel ക്ലൗഡ് സെർവറിൽ നിന്ന് സ്വാഗതം!');
});

app.get('/api/users', (req, res) => {
    res.json({ message: "യൂസർ ലിസ്റ്റ് ഇവിടെ ലഭിക്കും" });
});

// സെർവർ എക്സ്പോർട്ട് ചെയ്യുക (Vercel-ന് ഇത് നിർബന്ധമാണ്)
module.exports = app;