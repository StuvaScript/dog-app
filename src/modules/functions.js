export { searchForBreed, fetchBreedImagesAndInfo };

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
    if (data.length === 0) {
      console.warn('No breeds found. Pop message on screen.');
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

//? **`` Receives the value from the search input and fetches the dog breed data
async function fetchBreedImagesAndInfo(breedID) {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?api_key=${apiKey}&breed_ids=${breedID}&limit=15&has_breeds=1`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
