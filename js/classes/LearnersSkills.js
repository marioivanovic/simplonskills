export default class LearnersSkills {

    constructor(learnerSkill) {
        this.id = learnerSkill.id;
        this.learnerId = learnerSkill.learnerId;
        this.skillId = learnerSkill.skillId;
      
    }

    getLearenId() {
        return this.learnerId
    }

    getSkillId() {
        return this.skillId
    }

}