export default class Section {
    constructor({items, renderer}, selector) {
        this._items = items;
        this._renderer = renderer;
        this._list = document.querySelector(selector);
    } 
    
    renderItems(){
        this._items.forEach(element => {
            this._renderer(element);
        });
    }

    addItem(cardItem) {
        this._list.prepend(cardItem);
    }
}