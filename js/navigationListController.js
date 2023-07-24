import { catalogTitle, navigationList, navigationListItems } from "./elements.js"

export const navigationListController = (cb) => {
    navigationList.addEventListener('click', e => {
        const categoryItem = e.target.closest('.nav__btn');
        if (!categoryItem) return;
        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('nav__btn_active');
                catalogTitle.textContent = item.textContent;
                cb(item.dataset.category);
            } else {
                item.classList.remove('nav__btn_active');
            }
        });
    });
};