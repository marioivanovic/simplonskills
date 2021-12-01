export default class Levels {

    constructor(level) {
        this.id = level.id;
        this.label = level.label
    }

    getIdLevel() {
        return this.id
    }

    getLabel() {
        return this.label
    }
}