const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint utama
app.get("/", (req, res) => {
  res.send(`
    <h1>Konverter Desimal → Biner</h1>
    <form action="/convert">
      <input type="number" name="decimal" placeholder="Masukkan angka" required />
      <button type="submit">Konversi</button>
    </form>
  `);
});

// Endpoint konversi
app.get("/convert", (req, res) => {
  const decimal = req.query.decimal;

  if (!decimal) {
    return res.send("Masukkan angka!");
  }

  const binary = parseInt(decimal).toString(2);

  res.send(`
    <h2>Hasil: ${binary}</h2>
    <a href="/">Kembali</a>
  `);
});

// Health check (untuk testing performa)
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});