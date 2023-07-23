import { navigationList, navigationListItems } from "./elements.js"

export const navigationListController = () => {
    navigationList.addEventListener('click', e => {
        const categoryItem = e.target.closest('.nav__btn');
        if (!categoryItem) return;
        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('nav__btn_active');
            } else {
                item.classList.remove('nav__btn_active');
            }
        });
    });
};