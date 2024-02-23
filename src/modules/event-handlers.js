import {
  displayBackButton,
  displayBreeds,
  displayInfo,
  introPage,
  removeDogs,
  toggleBreedNotFoundMessage,
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
    //* **`` Display loading screen here ``**
    const returnedBreeds = await searchForBreed(inputField.value);
    inputField.value = '';
    //* **`` Remove loading screen here ``**
    if (returnedBreeds.length === 0) {
      toggleBreedNotFoundMessage();
      introPage();
      return;
    }
    displayBackButton('breed-select');
    const newBreedArray = buildBreedArray(returnedBreeds);
    displayBreeds(newBreedArray);
    clickBackButtonLogic();
    navigateToBreedInfoPageLogic(newBreedArray);
  });
}

//? **`` Adds a listener onto the breed-wrappers and displays the breed info when clicked. Also takes the newBreedArray as an argument and feeds that to the back button logic so navigating back is done with stored data so you don't need to fetch data again.
function navigateToBreedInfoPageLogic(newBreedArray) {
  [...document.querySelectorAll('.breed-wrapper')].forEach((breed) => {
    breed.addEventListener('click', async function (e) {
      console.log(e);
      console.log(this.attributes['data-breed-id'].value);
      const breedID = this.attributes['data-breed-id'].value;
      removeDogs();
      //* **`` Display loading screen here ``**
      const returnedInfo = await fetchBreedImagesAndInfo(breedID);
      //* **`` Remove loading screen here ``**
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

//? **`` The logic to the back buttons that reads the 'data-location' html attribute to determine what logic to run. Takes the 'newBreedArray' data as an argument so it can populate the previous page off stored data as opposed to fetching data again.
function clickBackButtonLogic(newBreedArray) {
  const backBtn = document.querySelector('#back-button');

  backBtn.addEventListener('click', function () {
    //? **`` This is the back button logic when you are at the 'breed select' page
    if (this.attributes['data-location'].value === 'breed-select') {
      removeDogs();
      introPage();
    }

    //? **`` This is the back button logic when you are at the 'breed info' page
    if (this.attributes['data-location'].value === 'breed-info') {
      removeDogs();
      displayBackButton('breed-select');
      displayBreeds(newBreedArray);
      clickBackButtonLogic();
      navigateToBreedInfoPageLogic(newBreedArray);
    }
  });
}
