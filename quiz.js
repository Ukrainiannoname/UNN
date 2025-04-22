document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Запобігаємо стандартній відправці форми

    // Отримуємо значення з форми
    const size = document.getElementById('size').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bodyType = document.getElementById('bodyType').value;

    // Логіка підбору футболки
    let suggestedSize = size;
    if (bodyType === 'endomorph') {
        suggestedSize = 'L'; // Для ендоморфів зазвичай більший розмір
    } else if (bodyType === 'ectomorph') {
        suggestedSize = 'S'; // Для ектоморфів зазвичай менший розмір
    }

    // Виведення результату
    alert(`Рекомендований розмір футболки: ${suggestedSize}`);
});
