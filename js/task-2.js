class Storage {
  constructor(initialItems) {
    this.items = initialItems;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
