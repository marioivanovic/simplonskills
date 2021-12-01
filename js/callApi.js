import Skill from "./classes/Skill";

let baseUrl = "http://localhost:3000/"

fetch( baseUrl + "skills")
.then(function(response) {
  return response.json();
})

.then(function(obj) {
  return obj.map((skill) => {
    const currentSkill = new Skill(skill);
    const globalContainer = document.querySelector(".container-skill");

    globalContainer.innerHTML +=
    `<div class="col-4 ${currentSkill.getCatColor(skill.idCat)}">
    <span>${currentSkill.getIdSkill()}</span>
    <p class="d-flex justify-content-center">${currentSkill.getLabel()}</p>
    </div>`
     
  })

})
.catch(function(error) {
  console.error(error);
})


