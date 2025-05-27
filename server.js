const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
  res.json({ message: 'Halo Dunia!' });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server jalan di http://localhost:${PORT}`);
});
