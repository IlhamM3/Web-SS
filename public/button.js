const button1 = document.getElementById('ph');
const button2 = document.getElementById('jurnal');
const button3 = document.getElementById('foto');
const button4 = document.getElementById('sinema');
const button5 = document.getElementById('dna');
let isClicked = false;

// Fungsi untuk mengubah opasitas tombol menjadi 100% atau 30%
function toggleOpacity() {
  isClicked = !isClicked;
  button1.style.opacity = isClicked ? 1 : 0.3;
  button2.style.opacity = isClicked ? 1 : 0.3;
  button3.style.opacity = isClicked ? 1 : 0.3;
  button4.style.opacity = isClicked ? 1 : 0.3;
  button5.style.opacity = isClicked ? 1 : 0.3;


}

// Tambahkan event listener ke tombol untuk memanggil fungsi saat diklik
button1.addEventListener('click', toggleOpacity);
button2.addEventListener('click', toggleOpacity);
button3.addEventListener('click', toggleOpacity);
button4.addEventListener('click', toggleOpacity);
button5.addEventListener('click', toggleOpacity);

// Fungsi untuk mengatur opasitas tombol kembali ke 30% jika diklik di luar tombol
function resetOpacity(event) {
  if (event.target !== button1 && event.target !== button2 && event.target !== button3 && event.target !== button4 && event.target !== button5){
    button1.style.opacity = 0.3;
    button2.style.opacity = 0.3;
    button3.style.opacity = 0.3;
    button4.style.opacity = 0.3;
    button5.style.opacity = 0.3;
    isClicked = false;
  }
}

// Tambahkan event listener ke dokumen untuk memanggil fungsi saat user mengklik di luar tombol
document.addEventListener('click', resetOpacity);
