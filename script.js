document.getElementById("greetBtn").addEventListener("click", function() {
  // Pindah ke halaman lain
  window.location.href = "tentang.html";
});

function showContent(menu) {
  const judul = document.getElementById("judul");
  const isi = document.getElementById("isi");

  if (menu === "home") {
    judul.textContent = "Beranda";
    isi.innerHTML = "<p>Ini adalah halaman beranda dashboard.</p>";
  } 
  else if (menu === "laporan") {
    judul.textContent = "Laporan";
    isi.innerHTML = `
      <p>Data laporan keuangan (contoh):</p>
      <ul>
        <li>Januari: Rp 10.000.000</li>
        <li>Februari: Rp 12.000.000</li>
        <li>Maret: Rp 9.500.000</li>
      </ul>
    `;
  } 
  else if (menu === "pengguna") {
    judul.textContent = "Pengguna";
    isi.innerHTML = `
      <p>Daftar pengguna terdaftar:</p>
      <ol>
        <li>Admin</li>
        <li>User1</li>
        <li>User2</li>
      </ol>
    `;
  }
}
