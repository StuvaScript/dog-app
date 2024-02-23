export { searchForBreed, fetchBreedImagesAndInfo, buildBreedArray };

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

//? **`` Builds a new array from out fetched data with only the data we need.
function buildBreedArray(returnedBreeds) {
  const breedArray = [];
  returnedBreeds.forEach((breed, index) => {
    breedArray[index] = {};
    breedArray[index].id = breed.id;
    breedArray[index].name = breed.name;
    if (breed.image) {
      breedArray[index].image = breed.image.url;
    }
  });
  return breedArray;
}
