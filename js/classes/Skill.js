export default class Skill {

    constructor(skill) {
        this.id = skill.id;
        this.label = skill.label;
        this.categoryId = skill.categoryId;
        this.levelId = skill.levelId
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
        return this.levelId
    }

    
    getCatColor(idCat) {
        let color = '';

        switch (idCat) {
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