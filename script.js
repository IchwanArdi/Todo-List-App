const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const inputTodo = document.querySelector('.inputTodo');

// Fungsi untuk menghasilkan warna gradient acak
function getRandomGradient() {
  const r1 = Math.floor(Math.random() * 256);
  const g1 = Math.floor(Math.random() * 256);
  const b1 = Math.floor(Math.random() * 256);

  const r2 = Math.floor(Math.random() * 256);
  const g2 = Math.floor(Math.random() * 256);
  const b2 = Math.floor(Math.random() * 256);

  return `linear-gradient(to right, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
}

// Event listener untuk tombol tambah todo
btn.addEventListener('click', () => {
  const todoText = inputTodo.value.trim();

  if (!todoText) {
    alert('Data tidak boleh kosong');
    return;
  }

  // Buat elemen baru
  const li = document.createElement('li');
  li.innerHTML = `<p>${todoText}</p> <button class="hapus">➖</button>`;

  // Tambahkan ke daftar
  list.appendChild(li);

  // Reset input
  inputTodo.value = '';
});

// Event listener untuk tombol hapus
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('hapus')) {
    event.target.parentElement.remove();
  }
});

// Event listener untuk mengubah warna background
document.querySelector('.boxBackground').addEventListener('click', () => {
  document.body.style.backgroundImage = getRandomGradient();
});

// Event listener untuk mengubah warna layout
document.querySelector('.boxLayout').addEventListener('click', () => {
  document.querySelector('.container').style.backgroundImage = getRandomGradient();
});

// Event listener untuk mengubah warna teks judul
document.querySelector('.boxText').addEventListener('click', function () {
  document.querySelector('.judul').style.backgroundImage = getRandomGradient();
});
