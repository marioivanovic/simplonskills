export default class Skill {

    constructor(skill) {
        this.id_skill = skill.id_skill;
        this.label = skill.label;
        this.id_cat = skill.id_cat;
        this.id_level = skill.id_level
    }

    getIdSkill() {
        return this.id_skill
    }

    getLabel() {
        return this.label
    }

    getIdCat() {
        return this.id_cat
    }

    getIdLevel() {
        return this.id_level
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