import { 
    ingredientsList,
    modalProductTitle,
    modalProductImg,
    modalProductDescription,
    ingredientsColories,
    modalProductPriceCount,
    modalProduct,
} from "./elements.js";

export const openModal = (product) => {
  
    modalProductTitle.textContent       = product.title;
    modalProductImg.src                 = product.image;
    ingredientsList.textContent         = '';
    ingredientsColories.textContent     = `${product.weight}г, ккал ${product.calories}`;
    modalProductDescription.textContent = product.description;
    modalProductPriceCount.textContent  = product.price;
    
    const ingredientsListItems = product.ingredients.map((item) => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = item;
        return li
    });
    
    ingredientsList.append(...ingredientsListItems);
  
    modalProduct.classList.add('modal__open');
    };