function randomArrayItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const _randomArrayItem = randomArrayItem;
export { _randomArrayItem as randomArrayItem };
