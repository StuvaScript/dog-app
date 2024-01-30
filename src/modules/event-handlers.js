import {
  backButton,
  displayBreeds,
  displayInfo,
  introPage,
  removeDogs,
} from './dom-manipulation';
import { fetchBreedImagesAndInfo, searchForBreed } from './functions';

export { searchBreedsLogic, clickLogoLogic };

//? **`` This listens for the search submit, waits for the function that fetches the data, and displays the appropriate data
function searchBreedsLogic() {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputField = document.querySelector('#search-input');
    if (inputField.value === '') {
      return;
    }
    removeDogs();
    const returnedBreeds = await searchForBreed(inputField.value);
    backButton();
    displayBreeds(returnedBreeds);
    inputField.value = '';
    navigateToBreedInfoPageLogic();
  });
}

//? **`` Adds a listener onto the breed-wrappers and displays the breed info when clicked
function navigateToBreedInfoPageLogic() {
  [...document.querySelectorAll('.breed-wrapper')].forEach((breed) => {
    breed.addEventListener('click', async function (e) {
      console.log(e);
      console.log(this.attributes['data-breed-id'].value);
      const breedID = this.attributes['data-breed-id'].value;
      removeDogs();
      const returnedInfo = await fetchBreedImagesAndInfo(breedID);
      displayInfo(returnedInfo);
    });
  });
}

function clickLogoLogic() {
  const logo = document.querySelector('#logo');

  logo.addEventListener('click', () => {
    removeDogs();
    introPage();
  });
}
