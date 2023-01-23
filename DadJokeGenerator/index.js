const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "a1RWlmeEOslgJ8FjdmkFtA==w4Vcv7ujmmztRZmi";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disable = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.disable = false;
    btnEl.innerText = "Tell me a joke";
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disable = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
