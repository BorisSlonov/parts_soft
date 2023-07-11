function createMenu() {
    const navMenu = document.querySelector('.singleArticle__navMenu');
    const items = document.querySelectorAll('.singleArticle__item');

    const menuItemMap = new Map(); // Сопоставление заголовка и пункта меню

    // Функция для проверки видимости заголовка
    function isHeadingVisible(heading) {
        const rect = heading.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Функция для добавления класса активности к пункту меню
    function setActiveMenuItem(menuItem) {
        const activeMenuItem = navMenu.querySelector('.singleArticle__menuItem.active');
        if (activeMenuItem) {
            activeMenuItem.classList.remove('active');
        }
        menuItem.classList.add('active');
    }

    // Создание пунктов меню и назначение обработчиков
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

            // Добавляем класс активности для текущего пункта меню
            setActiveMenuItem(menuItem);
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

                    // Добавляем класс активности для текущего пункта меню
                    setActiveMenuItem(menuItem);
                });
            });

            menuItem.appendChild(h3List);

            h3List.classList.add('singleArticle__h3List--collapsed');
        }

        navMenu.appendChild(menuItem);

        // Сопоставление заголовка и пункта меню
        menuItemMap.set(h2, menuItem);
        h3s.forEach((h3) => {
            menuItemMap.set(h3, menuItem);
        });
    });

    // Создание Intersection Observer для проверки видимости заголовков
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const heading = entry.target;
            const menuItem = menuItemMap.get(heading);
            if (entry.isIntersecting) {
                setActiveMenuItem(menuItem);
            }
        });
    });

    // Начало наблюдения за заголовками
    const headings = Array.from(document.querySelectorAll('.singleArticle__heading--h2, .singleArticle__heading--h3'));
    headings.forEach((heading) => {
        observer.observe(heading);
    });

    if (window.innerWidth >= 1000) {
        document.querySelectorAll('.singleArticle__h3List').forEach(i => {
            i.classList.add('singleArticle__h3List--expanded');
        })
    }
}

createMenu();
