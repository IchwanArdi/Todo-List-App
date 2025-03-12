const btn = document.querySelector('.btn');

document.querySelector('.list').addEventListener('click', (event) => {
  if (event.target.classList.contains('hapus')) {
    event.target.parentElement.remove(); // Menghapus elemen <li> yang berisi tombol
  }
});

btn.addEventListener('click', () => {
  const inputTodo = document.querySelector('.inputTodo').value;

  if (inputTodo.trim() === '') {
    alert('Data tidak boleh kosong');
  } else {
    // Membuat elemen baru
    const liList = document.createElement('li');
    const paragraf = document.createElement('p');
    const textBaru = document.createTextNode(inputTodo);

    paragraf.appendChild(textBaru);
    liList.appendChild(paragraf);

    // Membuat tombol hapus
    const button = document.createElement('button');
    button.setAttribute('class', 'hapus');
    button.textContent = '➖';

    // Menambahkan tombol ke dalam <li>
    liList.appendChild(button);

    // Menambahkan <li> ke dalam <ul>
    const ulList = document.querySelector('.list');
    ulList.appendChild(liList);

    // Reset input
    document.querySelector('.form').reset();

    console.log(inputTodo);
  }
});
