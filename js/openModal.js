import { API_URL, PREFIX_PRODUCT } from "./const.js";
import { 
    ingredientsList,
    modalProductTitle,
    modalProductImg,
    modalProductDescription,
    ingredientsColories,
    modalProductPriceCount,
    modalProduct,
} from "./elements.js";
import { getData } from "./getData.js";

export const openModal = async (id) => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);
  
    modalProductTitle.textContent       = product.title;
    modalProductImg.src                 = `${API_URL}/${product.image}`;
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