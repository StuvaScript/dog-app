export {
  displayBreeds,
  removeDogs,
  displayInfo,
  introPage,
  displayBackButton,
  displaySearchIcon,
  displayLogo,
  displayFavicon,
  toggleBreedNotFoundMessage,
};

import searchIcon from '../images/search.png';
import logo from '../images/dog-logo.png';

const main = document.querySelector('main');

//? **`` Removes all the children under the 'main' element except the first element (the 'form')
function removeDogs() {
  main.replaceChildren(main.firstElementChild);
  if (document.querySelector('#back-button')) {
    document.querySelector('#back-button').remove();
  }
}

//* **`` The main breed selector page
//* ************************************************************************************
//? **`` Makes a list of all the dog breed names that appeared from the search input and displays them
function displayBreeds(newBreedArray) {
  const listWrapper = document.createElement('div');
  listWrapper.setAttribute('id', 'list-wrapper');

  //? **`` Creates a div for each breed, adds a class name and the breed ID, and appends it to the wrapper
  newBreedArray.forEach((breed) => {
    //? **`` If theres no image, it returns and won't display anything.
    if (!breed.image) {
      return;
    }
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
  img.setAttribute('src', breed.image);
  img.setAttribute('alt', `Picture of ${breed.name} breed`);
  breedImage.append(img);
  breedWrapper.append(breedImage);
}

//* **`` The breed info page
//* ************************************************************************************

//? **`` Takes the data and displays it according to the user's breed selection
function displayInfo(returnedInfo) {
  const singleBreedWrapper = document.createElement('div');
  singleBreedWrapper.setAttribute('id', 'single-breed-wrapper');
  main.append(singleBreedWrapper);

  //? **`` Creates the info wrapper area
  const infoWrapper = document.createElement('div');
  infoWrapper.setAttribute('id', 'info-wrapper');
  singleBreedWrapper.append(infoWrapper);

  //? **`` This area contains conditionals. If any info is empty or undefined, it doesn't get displayed
  const bredFor = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].bred_for === '' ||
      returnedInfo[0].breeds[0].bred_for === undefined
    )
  ) {
    bredFor.innerText = `Bred for: ${returnedInfo[0].breeds[0].bred_for}`;
  }

  const breedGroup = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].breed_group === '' ||
      returnedInfo[0].breeds[0].breed_group === undefined
    )
  ) {
    breedGroup.innerText = `Breed group: ${returnedInfo[0].breeds[0].breed_group}`;
  }

  const height = document.createElement('div');
  height.innerText = `Height: ${returnedInfo[0].breeds[0].height.imperial} in, ${returnedInfo[0].breeds[0].height.metric} cm`;

  const weight = document.createElement('div');
  weight.innerText = `Weight: ${returnedInfo[0].breeds[0].weight.imperial} lb, ${returnedInfo[0].breeds[0].weight.metric} kg`;

  const lifeSpan = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].life_span === '' ||
      returnedInfo[0].breeds[0].life_span === undefined
    )
  ) {
    lifeSpan.innerText = `Life span: ${returnedInfo[0].breeds[0].life_span}`;
  }

  const name = document.createElement('h1');
  name.innerText = `${returnedInfo[0].breeds[0].name}`;

  const temperament = document.createElement('div');
  if (
    !(
      returnedInfo[0].breeds[0].temperament === '' ||
      returnedInfo[0].breeds[0].temperament === undefined
    )
  ) {
    temperament.innerText = `Temperament: ${returnedInfo[0].breeds[0].temperament}`;
  }

  infoWrapper.append(
    name,
    breedGroup,
    bredFor,
    height,
    weight,
    lifeSpan,
    temperament,
  );

  //? **`` Creates the image wrapper area
  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', 'image-wrapper');
  singleBreedWrapper.append(imageWrapper);

  returnedInfo.forEach((item) => {
    console.log(item.url);
    const infoImage = document.createElement('div');
    infoImage.classList.add('info-image');
    const img = document.createElement('img');
    img.setAttribute('src', item.url);
    img.setAttribute('alt', `Picture of ${item.breeds[0].name} breed`);
    infoImage.append(img);
    imageWrapper.append(infoImage);
  });
}

//* **`` Other functions
//* ************************************************************************************

//? **`` The initial greeting for the app
function introPage() {
  const welcomeWrapper = document.createElement('div');
  welcomeWrapper.setAttribute('id', 'welcome-wrapper');

  const h1 = document.createElement('h1');
  h1.innerText = 'Welcome to the Dog App!';

  const para = document.createElement('p');
  para.innerText =
    'Doggo ipsum pupperino pupper heckin floof boop bamboozle noods zoomies yapper nuggs chonky walkies pats boop awoo derp fren woofer gib gib toe beans teef noods snoot heck mahm loaf smol cloud floofer cronch snoot yapper bork bamboozle derp chonk sploot henlo pats long boi sleppy fluffer tippy taps danger noodle hooman blop.';

  welcomeWrapper.append(h1, para);

  main.append(welcomeWrapper);
}

//? **`` Creates a back button, sets a data attribute with the location where the 'back button' is currently at.
function displayBackButton(location) {
  const formBackWrapper = document.querySelector('#form-back-wrapper');

  const goBack = document.createElement('div');
  goBack.setAttribute('id', 'back-button');
  goBack.setAttribute('data-location', `${location}`);
  goBack.innerText = 'Go back';
  formBackWrapper.append(goBack);
}

//? **`` Displays the search icon
function displaySearchIcon() {
  document.querySelector('#submit-button img').setAttribute('src', searchIcon);
}

//? **`` Displays the logo
function displayLogo() {
  document.querySelector('header img').setAttribute('src', logo);
}

//? **`` Displays the favicon
function displayFavicon() {
  document.querySelector('link[rel="icon"]').setAttribute('href', logo);
}

//? **`` When no breed is found after a search, this changes the input field placeholder text, colors the input border, adds a click event listener to the input field to return everything back to normal when the user tries to search again.
function toggleBreedNotFoundMessage() {
  const searchInput = document.querySelector('#search-input');

  searchInput.placeholder = 'No breeds found!';
  searchInput.classList.add('warn');

  searchInput.addEventListener('click', () => {
    searchInput.placeholder = 'Search breeds...';
    searchInput.classList.remove('warn');
  });
}
