import {
  displayBackButton,
  displayBreeds,
  displayInfo,
  introPage,
  removeDogs,
} from './dom-manipulation';
import {
  buildBreedArray,
  fetchBreedImagesAndInfo,
  searchForBreed,
} from './functions';

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
    displayBackButton('breed-select');
    const newBreedArray = buildBreedArray(returnedBreeds);
    displayBreeds(newBreedArray);
    inputField.value = '';
    clickBackButtonLogic();
    navigateToBreedInfoPageLogic(newBreedArray);
  });
}

//? **`` Adds a listener onto the breed-wrappers and displays the breed info when clicked
function navigateToBreedInfoPageLogic(newBreedArray) {
  [...document.querySelectorAll('.breed-wrapper')].forEach((breed) => {
    breed.addEventListener('click', async function (e) {
      console.log(e);
      console.log(this.attributes['data-breed-id'].value);
      const breedID = this.attributes['data-breed-id'].value;
      removeDogs();
      const returnedInfo = await fetchBreedImagesAndInfo(breedID);
      displayBackButton('breed-info');
      displayInfo(returnedInfo);
      clickBackButtonLogic(newBreedArray);
    });
  });
}

//? **`` When clicking the logo, it acts as a 'home' button returning you to the main screen
function clickLogoLogic() {
  const logo = document.querySelector('#logo');

  logo.addEventListener('click', () => {
    removeDogs();
    introPage();
  });
}

function clickBackButtonLogic(newBreedArray) {
  const backBtn = document.querySelector('#back-button');

  backBtn.addEventListener('click', function () {
    console.log(this.attributes['data-location'].value);
    if (this.attributes['data-location'].value === 'breed-select') {
      removeDogs();
      introPage();
    }

    if (this.attributes['data-location'].value === 'breed-info') {
      removeDogs();
      displayBackButton('breed-select');
      displayBreeds(newBreedArray);
      clickBackButtonLogic();
      navigateToBreedInfoPageLogic(newBreedArray);
    }
  });
}
