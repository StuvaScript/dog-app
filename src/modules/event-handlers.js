import { displayBreeds, removeDogs } from './dom-manipulation';
import { fetchBreedImagesAndInfo, searchForBreed } from './functions';

export { searchBreedsLogic };

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
      function displayInfo(returnedInfo) {
        const main = document.querySelector('main');

        const infoWrapper = document.createElement('div');
        infoWrapper.setAttribute('id', 'info-wrapper');
        main.append(infoWrapper);

        // for (const [key, value] of Object.entries(returnedInfo[0].breeds[0])) {
        //   console.log(`${key}: ${value}`);
        // }
        const bredFor = document.createElement('div');
        bredFor.innerText = `Bred for: ${returnedInfo[0].breeds[0].bred_for}`;
        const breedGroup = document.createElement('div');
        breedGroup.innerText = `Breed group: ${returnedInfo[0].breeds[0].breed_group}`;
        const height = document.createElement('div');
        height.innerText = `Height: ${returnedInfo[0].breeds[0].height.imperial} in, ${returnedInfo[0].breeds[0].height.metric} cm`;
        const weight = document.createElement('div');
        weight.innerText = `Weight: ${returnedInfo[0].breeds[0].weight.imperial} lb, ${returnedInfo[0].breeds[0].weight.metric} kg`;
        const lifeSpan = document.createElement('div');
        lifeSpan.innerText = `Life span: ${returnedInfo[0].breeds[0].life_span}`;
        const name = document.createElement('div');
        name.innerText = `${returnedInfo[0].breeds[0].name}`;
        const temperament = document.createElement('div');
        temperament.innerText = `Temperament: ${returnedInfo[0].breeds[0].temperament}`;
        infoWrapper.append(
          bredFor,
          breedGroup,
          height,
          weight,
          lifeSpan,
          name,
          temperament,
        );

        console.log(returnedInfo[0].breeds[0]);
        console.log('bred for ' + returnedInfo[0].breeds[0].bred_for);
        console.log('breed group ' + returnedInfo[0].breeds[0].breed_group);
        console.log(
          'height ' +
            returnedInfo[0].breeds[0].height.imperial +
            ' ' +
            returnedInfo[0].breeds[0].height.metric,
        );
        console.log('life span ' + returnedInfo[0].breeds[0].life_span);
        console.log('name ' + returnedInfo[0].breeds[0].name);
        console.log('temperament ' + returnedInfo[0].breeds[0].temperament);
        console.log(
          'weight ' +
            returnedInfo[0].breeds[0].weight.imperial +
            ' ' +
            returnedInfo[0].breeds[0].weight.metric,
        );
      }
    });
  });
}
