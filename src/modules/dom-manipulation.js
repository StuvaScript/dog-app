export { displayBreeds, removeDogs, displayInfo };

const main = document.querySelector('main');

//? **`` Removes all the children under the 'main' element except the first element (the 'form')
function removeDogs() {
  main.replaceChildren(main.firstElementChild);
}

//* **`` The main breed selector page
//* ************************************************************************************
//? **`` Makes a list of all the dog breed names that appeared from the search input and displays them
function displayBreeds([...returnedBreeds]) {
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

//* **`` The breed info page
//* ************************************************************************************

//? **`` Takes the data and displays it according to the user's breed selection
function displayInfo(returnedInfo) {
  //? **`` Creates the info wrapper area
  const infoWrapper = document.createElement('div');
  infoWrapper.setAttribute('id', 'info-wrapper');
  main.append(infoWrapper);

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

  //? **`` Creates the image wrapper area
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  main.append(imageWrapper);

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
