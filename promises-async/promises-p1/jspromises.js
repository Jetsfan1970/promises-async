// let favNum = 7;
// let baseURL = "http://numbersapi.com";

// async function favNumFacts() {
//   let fact = await axios.get(`${baseURL}/${favNum}?json`);

//   console.log(fact.data.text);
// }

// favNumFacts();

// const favNumbers = [7, 11, 22];
// async function part2() {
//   let data = await axios.get(`${baseURL}/${favNumbers}?json`);
//   console.log(data);
// }
// part2();

async function part3() {
  let baseURL = "http://numbersapi.com";
  let favNumber = 5;
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach((data) => {
    const h1Element = document.querySelector("h1");
    const textNode = document.createTextNode(data.text);
    h1Element.appendChild(textNode);
  });
}
part3();
