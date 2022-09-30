const getJoke = async () => {
  // Show Loader
  loader.classList.toggle("hidden");
  joke.classList.toggle("hidden");

  // API url
  const url = "https://hindi-jokes-api.onrender.com/jokes";

  // Fetching API
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // Stored JOKE
      const newJoke = data.jokeContent;

      // Hide Loader
      loader.classList.toggle("hidden");
      joke.classList.toggle("hidden");

      // Insert JOKE in DIV
      joke.innerText = newJoke;
    })
    // Error Handling
    .catch((error) => {
      console.log("Error coming while fetching Data", error);
    });
};

// Getting Elements
const joke = document.getElementById("joke");
const loader = document.getElementById("loader");
const btn = document.getElementById("jokeBtn");

getJoke(); // Initial function call

// Event on click
btn.addEventListener("click", () => {
  getJoke();
});
