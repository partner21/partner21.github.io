// Берем query-поле  "page"
let page = getQueryVariable('page')

// Ищем все блоки, с дата-аттрибутом page
pages = document.querySelectorAll('[data-page]');
// Скрываем все такие блоки
for(let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
}
// Проверяем, не пустое ли поле page в ссылке на страницу
if(getQueryVariable('page') != false) {
    // Проверяем, если ли дата-атрибут page равный нашему полю
    if(document.querySelector('[data-page='+ page +']')!=null) {
        // Получаем нужный нам дата-аттрибут
        document
            .querySelector('[data-page=' + page + ']')
            // Обращаемся к аттрибуту style этого тега
            .style
            // Устанавливаем display в значение block
            .display='block';
    }   
}