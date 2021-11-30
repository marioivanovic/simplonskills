export class Category{

    _id
    _libelle
    _description
    _Skill
    
    constructor() {
    }

    constructor(id,libelle,description) {
        this._id=id
        this._libelle=libelle
        this._description=description
    }

    getId(){
        return this._id
    }

    getLibelle(){
        return this._libelle
    }

    getdescription(){
        return this._description
    }

    getCompetence(){
        return this._Competence
    }
}