export default class Category {

    constructor(category) {
        this.id = category.id;
        this.num_cat = category.num_cat;
        this.description = category.description;
        this.skills = category.skills;
    }

    getIdCat() {
        return this.id
    }

    getNumCat() {
        return this.num_cat
    }

    getDesc() {
        return this.description
    }
}