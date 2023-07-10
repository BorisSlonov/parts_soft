// заголовки в меню создаются динамически, исходя из контента в singleArticle__content
// если внутри singleArticle__item кроме h2 есть h3, создается подменю
function createMenu() {
    const navMenu = document.querySelector('.singleArticle__navMenu');
    const items = document.querySelectorAll('.singleArticle__item');

    items.forEach((item) => {
        const h2 = item.querySelector('.singleArticle__heading--h2');
        const h3s = item.querySelectorAll('.singleArticle__heading--h3');

        const menuItem = document.createElement('div');
        menuItem.className = 'singleArticle__menuItem';

        const h2Wrapper = document.createElement('div');
        h2Wrapper.className = 'singleArticle__h2Wrapper';

        if (h3s.length > 0) {
            const h2Title = document.createElement('span');
            h2Title.className = 'singleArticle__h2Span';
            h2Title.textContent = h2.textContent;
            h2Wrapper.appendChild(h2Title);

            const arrow = document.createElement('div');
            arrow.className = 'singleArticle__arrow';
            h2Wrapper.appendChild(arrow);

            arrow.addEventListener('click', (event) => {
                event.stopPropagation();
                const h3List = menuItem.querySelector('.singleArticle__h3List');
                h3List.classList.toggle('singleArticle__h3List--expanded');
                arrow.classList.toggle('singleArticle__arrow--expanded');
            });
        } else {
            const h2Title = document.createElement('span');
            h2Title.className = 'singleArticle__h2Span';
            h2Title.textContent = h2.textContent;
            h2Wrapper.appendChild(h2Title);
        }

        h2Wrapper.addEventListener('click', () => {
            h2.scrollIntoView({ behavior: 'smooth' });
        });

        menuItem.appendChild(h2Wrapper);

        if (h3s.length > 0) {
            const h3List = document.createElement('ul');
            h3List.className = 'singleArticle__h3List';

            h3s.forEach((h3) => {
                const h3Item = document.createElement('li');
                h3Item.className = 'singleArticle__h3Item';
                h3Item.textContent = h3.textContent;
                h3List.appendChild(h3Item);

                h3Item.addEventListener('click', () => {
                    h3.scrollIntoView({ behavior: 'smooth' });
                });
            });

            menuItem.appendChild(h3List);

            h3List.classList.add('singleArticle__h3List--collapsed');
        }

        navMenu.appendChild(menuItem);
    });
}

createMenu();


