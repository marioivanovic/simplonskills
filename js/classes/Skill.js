export default class Skill {

    constructor(skill) {
        this.id = skill.id;
        this.label = skill.label;
        this.categoryId = skill.categoryId;
        this.idLevel = skill.idLevel
    }

    getIdSkill() {
        return this.id
    }

    getLabel() {
        return this.label
    }

    getIdCat() {
        return this.categoryId
    }

    getIdLevel() {
        return this.idLevel
    }


    getCatColor(categoryId) {
        let color = '';

        switch (categoryId) {
            case 1:
                color = "bg-light-blue"
                break;
            case 2:
                color = "bg-purple"
                break;
            case 3:
                color = "bg-blue"
                break;
        }

        return color;
    }
}