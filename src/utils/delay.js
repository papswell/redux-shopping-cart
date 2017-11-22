import random from './random';

export const delay = (wait) => new Promise((resolve) => {
  setTimeout(resolve, wait);
});

export const randDelay = (from, to) => {
  return delay(random(from, to));
}
