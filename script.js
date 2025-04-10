const newsItems = [
  "AI делает жизнь проще: автоматизация помогает в обучении",
  "Новый смартфон от XYZ стоит 1500$ — стоит ли он того?",
  "Советы по фокусировке: как меньше отвлекаться",
  "Мировые новости: экономические прогнозы на 2025",
  "Лучшие книги по саморазвитию в 2025 году"
];

const filterInput = document.getElementById('filterInput');
const newsList = document.getElementById('newsList');

function displayNews(filter = '') {
  newsList.innerHTML = '';
  newsItems
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      newsList.appendChild(li);
    });
}

filterInput.addEventListener('input', () => {
  displayNews(filterInput.value);
});

displayNews(); // начальный запуск
