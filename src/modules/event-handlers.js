import { searchForBreed } from './functions';

export { searchBreedsLogic };

//! **`` The prevent default isn't working and the page is reloading on submit. Possibly an issue with async function
function searchBreedsLogic() {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault;
    let inputField = document.querySelector('#search-input');

    console.log(inputField.value);
    const returnedBreeds = await searchForBreed(inputField.value);
    console.log(returnedBreeds);

    displayBreeds(returnedBreeds);

    function displayBreeds([...returnedBreeds]) {
      const main = document.querySelector('main');
      const list = document.createElement('ul');
      returnedBreeds.forEach((breed) => {
        const li = document.createElement('li');
        li.innerText = breed.name;
        list.append(li);
      });
      main.append(list);
    }
  });
}
