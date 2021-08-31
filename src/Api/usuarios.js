export function getUsuario() {
  return fetch("https://reqres.in/api/users?page=2")
    .then((response) => response.json())
    .then(({ data }) => {
      const userRandom = data.map((user) => user);

      const aleatorio = Math.floor(Math.random() * data.length);
      return userRandom[aleatorio];
    });
}
