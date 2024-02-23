import {
  displayFavicon,
  displayLoadingImage,
  displayLogo,
  displaySearchIcon,
  introPage,
} from './modules/dom-manipulation';
import { clickLogoLogic, searchBreedsLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

introPage();

searchBreedsLogic();
clickLogoLogic();

displaySearchIcon();
displayLogo();
displayFavicon();
displayLoadingImage();

//! **`` npx webpack --watch FOOOOOOOL
//todo **`` Add a loading screen
//todo **`` Get rid of helper console messages
//todo **`` Update README.md
