import { LS_CART_ITEMS_KEY } from './constants';
import { loadFromLs, saveToLs } from './local-storage';

export function addToCart(id) {
  let parsedIds = loadFromLs(LS_CART_ITEMS_KEY, []);
  console.log(parsedIds);

  if (parsedIds.includes(id)) {
    parsedIds = parsedIds.filter(elId => elId !== id);
    saveToLs(LS_CART_ITEMS_KEY, parsedIds);
    return false;
  } else {
    parsedIds.push(id);
    saveToLs(LS_CART_ITEMS_KEY, parsedIds);
    return true;
  }
}
