class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    console.log("Текущие элементы:", this.#items);
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
    console.log(`Добавлен элемент: ${newItem}`);
    console.log("Новый список:", this.#items);
  }

  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
      console.log(`Удален элемент: ${itemToRemove}`);
    } else {
      console.log(`Элемент "${itemToRemove}" не найден.`);
    }
    console.log("Текущий список после удаления:", this.#items);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
