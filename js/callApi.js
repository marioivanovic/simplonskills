import Skill from "./classes/Skill";
import Category from "./classes/Categories";

let baseUrl = "http://localhost:3000/"

fetch(baseUrl + "skills")

  .then(function (response) {
    return response.json();
  })

  .then(function (obj) {
    return obj.map((skill) => {
      const currentSkill = new Skill(skill);
      const globalContainer = document.querySelector(".container-skill");

      globalContainer.innerHTML +=
        `<div class="col-4 ${currentSkill.getCatColor(skill.catId)}">
    <span>${currentSkill.getIdSkill()}</span>
    <p class="d-flex justify-content-center">${currentSkill.getLabel()}</p>
    </div>`

    })

  })
  .catch(function (error) {
    console.error(error);
  })

// function getSkills(id_cat) {
//   return fetch(baseUrl + `skill?categories=${id_cat}`)
//     .then(function (res) {
//       console.log("=>1=>", res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log("<==2==>", data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     })
// }

// getSkills();

// ________________ CALL API CATEGORIES____________


// filtrer skills avec categories

fetch(baseUrl + "categories?_embed=skills")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log("--->", data[1].skills[0]);

    return data.map((category) => {
      const globalContainer = document.querySelector(".displays");
      const currentCategory = new Category(category);
      console.log("currentCat", currentCategory);
      globalContainer.innerHTML +=
        `<table class="table table-striped table-hover">
        <tr>
          <th scope="col">
          ${currentCategory.getDesc()}
          </th>
          <th scope="col">Niveau 1 : Imiter</th>
          <th scope="col">Niveau 2 : Adapter</th>
          <th scope="col">Niveau 3 : Transposer</th>
        </tr> 
        </table>`
      currentCategory.skills.map((skill) => {

        const dataSkill = new Skill(skill);

        console.log("dataSkills", dataSkill);
        const globalContainer = document.querySelector(".displays");

        globalContainer.innerHTML +=
          `
          <table class="table table-striped table-hover">
          <tr>
          <td scope="col">${dataSkill.getLabel()}</td>
          <th><input class="form-check-input" type="radio" /></th>
          <th><input class="form-check-input" type="radio" /></th>
          <th><input class="form-check-input" type="radio" /></th>
        </tr >
          </table >`

      });
    })
  })
  .catch(function (error) {
    console.error(error);
  })
