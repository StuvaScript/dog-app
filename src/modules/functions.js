export { searchForBreed };

const apiKey = process.env.API_KEY;

//? **`` Receives the value from the search input and fetches the dog breed data
async function searchForBreed(searchValue) {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?api_key=${apiKey}&q=${searchValue}`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
