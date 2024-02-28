let userName = prompt("Kenalan dulu yuk...\nMasukkan nama mu dibawah ini ya!");
document.getElementById("username").innerText = userName;

console.log("ok");

function kirim() {
  // Array nama bulan
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  // Membuat waktu saat ini
  const date = new Date();
  const tanggal = date.getDate() + " " + bulan[date.getMonth()] + " " + date.getFullYear();
  const jam = date.getHours() + ":" + date.getMinutes();
  const waktuIni = jam + ", " + tanggal;

  // Mengambil data input form
  const nama = document.forms["message-form"]["nama"].value;
  const ttl = document.forms["message-form"]["ttl"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const pesan = document.forms["message-form"]["message"].value;

  // Validasi form
  if (nama === "" || ttl === "" || gender === "" || pesan === "") {
    alert("Input form tidak boleh kosong!");
    return false;
  }

  document.getElementById("time").innerText = waktuIni;
  document.getElementById("nama-2").innerText = nama;
  document.getElementById("ttl-2").innerText = ttl;
  document.getElementById("gender-2").innerText = gender;
  document.getElementById("message-2").innerText = pesan;
}
