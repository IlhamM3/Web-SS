const menu = document.querySelector('.menu-toggle');
        const navmenu = document.querySelector('.navmenu');

        menu.addEventListener('click', () => {
            menu.classList.toggle('active');
            navmenu.classList.toggle('active');
        });
