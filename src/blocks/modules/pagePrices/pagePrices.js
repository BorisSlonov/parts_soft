
if (document.querySelectorAll('.btn_pricesTableOpenHidden')) {
    const buttons = document.querySelectorAll('.btn_pricesTableOpenHidden');
    const buttonSpans = document.querySelectorAll('.btn_pricesTableOpenHidden .btn__span');
    const rows = document.querySelectorAll('.pricesTable__row_openHidden');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            rows.forEach(row => {
                row.classList.toggle('hide');
            });

            const buttonText = buttonSpans[index].textContent.trim();
            buttonSpans[index].textContent = buttonText === 'Свернуть' ? 'Развернуть все' : 'Свернуть';
        });
    });
}


if (document.querySelector('.tariffsToggle__btn_parts')) {
    // Получите ссылки на элементы кнопок и блоков
    const btnParts = document.querySelector('.tariffsToggle__btn_parts');
    const btnOwn = document.querySelector('.tariffsToggle__btn_own');
    const tariffParts = document.querySelector('.pricesTable_tariffParts');
    const tariffOwn = document.querySelector('.pricesTable_tariffOwn');

    // Добавьте обработчик события клика на кнопку btnParts
    btnParts.addEventListener('click', () => {
        tariffParts.classList.remove('hide'); // Уберите класс hide с pricesTable_tariffParts
        tariffOwn.classList.add('hide'); // Добавьте класс hide к pricesTable_tariffOwn

        btnParts.classList.add('active'); // Добавьте класс active к btnParts
        btnOwn.classList.remove('active'); // Уберите класс active с btnOwn
    });

    // Добавьте обработчик события клика на кнопку btnOwn
    btnOwn.addEventListener('click', () => {
        tariffParts.classList.add('hide'); // Добавьте класс hide к pricesTable_tariffParts
        tariffOwn.classList.remove('hide'); // Уберите класс hide с pricesTable_tariffOwn

        btnParts.classList.remove('active'); // Уберите класс active с btnParts
        btnOwn.classList.add('active'); // Добавьте класс active к btnOwn
    });
}
