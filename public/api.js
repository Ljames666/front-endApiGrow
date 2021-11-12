const api = axios.create({
  baseURL: "https://api-grow-ljames.herokuapp.com",
});

api
  .get("/")
  .then((result) => {
    let array = result.data.data;
    for (let grow of array) {
      document.getElementById("lista").innerHTML += `<li>${grow.nome}</li>`;
    }
  })
  .catch((err) => {
    console.log(err);
  });
