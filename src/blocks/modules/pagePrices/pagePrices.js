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
