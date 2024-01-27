export { displayBreeds, removeDogs };

//* **`` The main breed selector page
//* ************************************************************************************
//? **`` Makes a list of all the dog breed names that appeared from the search input and displays them
function displayBreeds([...returnedBreeds]) {
  const main = document.querySelector('main');
  const listWrapper = document.createElement('div');
  listWrapper.setAttribute('id', 'list-wrapper');

  returnedBreeds.forEach((breed) => {
    //? **`` Creates a div for each breed, adds a class name and the breed ID, and appends it to the wrapper
    const breedWrapper = document.createElement('div');
    breedWrapper.classList.add('breed-wrapper');
    breedWrapper.setAttribute('data-breed-ID', `${breed.id}`);
    breedName(breed, breedWrapper);
    breedImage(breed, breedWrapper);

    listWrapper.append(breedWrapper);
  });
  main.append(listWrapper);
}

//? **` Creates a div, assigns the breed's name and class name to the div
function breedName(breed, breedWrapper) {
  const breedName = document.createElement('div');
  breedName.classList.add('breed-name');
  breedName.innerText = breed.name;
  breedWrapper.append(breedName);
}
//? **` Creates a div, assigns the breed's class name to the div. Creates an img element and attaches the breed's image to it.
function breedImage(breed, breedWrapper) {
  //? **`` Creates the div
  const breedImage = document.createElement('div');
  breedImage.classList.add('breed-image');
  //? **`` Creates the image
  const img = document.createElement('img');
  img.setAttribute('src', breed.image.url);
  img.setAttribute('alt', `Picture of ${breed.name} breed`);
  breedImage.append(img);
  breedWrapper.append(breedImage);
}

//? **`` Removes the displayed dogs
function removeDogs() {
  if (document.querySelector('#list-wrapper')) {
    document.querySelector('#list-wrapper').remove();
  }
}

//* **`` The breed info page
//* ************************************************************************************
