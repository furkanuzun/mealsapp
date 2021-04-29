import { makeAutoObservable } from 'mobx';

class FavItemsStore {
    constructor() {
        makeAutoObservable(this)
    }

    playFavAnimation = 0;
    favItems = [];

    addToFav = (meal) => {
        this.favItems.push(meal);
        this.playFavAnimation = 1;
        setTimeout(() => {
            this.playFavAnimation = 0;
        }, 5000);
    }

    delFromFav = () => {

    }
}

export default new FavItemsStore();