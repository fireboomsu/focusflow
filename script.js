const newsItems = [
  "AI делает жизнь проще: автоматизация помогает в обучении",
  "Новый смартфон от XYZ стоит 1500$ — стоит ли он того?",
  "Советы по фокусировке: как меньше отвлекаться",
  "Мировые новости: экономические прогнозы на 2025",
  "Лучшие книги по саморазвитию в 2025 году"
];

const filterInput = document.getElementById('filterInput');
const newsList = document.getElementById('newsList');

// Функция для отображения новостей
function displayNews(filter = '') {
  newsList.innerHTML = ''; // очищаем список новостей
  newsItems
    .filter(item => item.toLowerCase().includes(filter.toLowerCase())) // фильтрация новостей по ключевому слову
    .forEach(item => {
      const li = document.createElement('li');
      li.textContent = item; // выводим заголовок новости
      li.classList.add('p-4', 'bg-white', 'rounded-lg', 'shadow-md', 'hover:bg-blue-100', 'transition'); // добавляем стиль для новости
      newsList.appendChild(li);
    });
}

// Слушатель для фильтра
filterInput.addEventListener('input', () => {
  displayNews(filterInput.value); // фильтруем новости по введенному запросу
});

// Запрос к API для получения новостей
axios.get('https://newsapi.org/v2/everything?q=tesla&from=2025-03-10&sortBy=publishedAt&apiKey=ae04464c9f9b48508799168a95a2caa2')
  .then(response => {
    console.log(response.data);
    newsItems.length = 0; // очищаем старые новости
    newsItems.push(...response.data.articles.map(article => article.title)); // добавляем новые новости
    displayNews(); // отображаем новости после загрузки
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных: ', error);
  });
