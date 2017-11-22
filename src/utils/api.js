import { randDelay } from './delay';
import products from './products';
import rand from './random';

export const getAllProducts = () => randDelay(1000, 3000)
  .then(() => Promise.resolve(products));

export const sendCart = () => randDelay(1000, 3000)
  .then(() => {
    const success = rand(0, 1);
    if (!success) {
      throw Error('Argh, No enough money !');
    }
    return Promise.resolve();
  })
