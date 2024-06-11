import Popup from "./Popup.js"
export default class PopupWithImage extends Popup{
    constructor(popupSelector, viewImage, titleImage){
        super(popupSelector);
        this._viewImage = viewImage;
        this._titleImage = titleImage;
    }
    open(link, name){
        super.open();
        this._viewImage.src = link;
        this._titleImage.textContent = name;
    }
}
