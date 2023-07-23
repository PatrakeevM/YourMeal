import {
    modalProduct,
    catalogList,
} from './elements.js'

import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';

const Joe = {
    title: 'Сырный джо',
    price: 569,
    weight: 600,
    calories: 500,
    description: 'Сырный взрыв, вся палитра сыров в одном бургере',
    image: 'images/product.jpg',
    ingredients: [
        'Пшеничная булочка',
        'Котлета из рубленой говядины',
        '4 вида сыров',
        'Авторский соус'
    ]
};


catalogList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.product__detail')
        || target.closest('.product__img')) {
            openModal(Joe);
    }
});

modalProduct.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.modal__close')
        || target === modalProduct) {
        modalProduct.classList.remove('modal__open');
    };
});

const init = () => {
    renderListProduct();
    navigationListController();
};

init();


// const orderSubmit = document.querySelector('.order__submit');
// const modalDelivery = document.querySelector('.modal__delivery');

// orderSubmit.addEventListener('click', () => {
//     modalDelivery.classList.add('modal__open');
// });