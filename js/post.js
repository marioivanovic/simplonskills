let baseUrl = "http://localhost:3000/"

fetch(baseUrl + "learners", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name: "", skill: "", level: "" })
})
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (obj) {
        console.log(obj);
    })
    .catch(function (error) {
        console.log(error);
    });