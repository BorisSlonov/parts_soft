function modalContent(trigger, item) {
    const btn = document.querySelectorAll(trigger),
        pop = document.querySelector(item),
        close = document.querySelectorAll('.popup-close'),
        closeBack = document.querySelectorAll('.popupWrapper'),
        activeClass = 'show',
        hideClass = 'hide';

    function showContent() {
        pop.classList.add(activeClass);
        pop.classList.remove(hideClass);
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new CustomEvent('resize'));
    }

    function hideContent() {
        pop.classList.remove(activeClass);
        pop.classList.add(hideClass);
        document.body.style.overflow = '';

    }

    function showHideContent(trigger, func) {
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                func();
            });
        });
    }

    showHideContent(btn, showContent);
    showHideContent(close, hideContent);
    showHideContent(closeBack, hideContent);
}

modalContent('.callback-btn', '.popup_callback');
modalContent('.done-btn', '.popup_done');
modalContent('.demo-btn', '.popup_demo');
