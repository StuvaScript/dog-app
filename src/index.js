import {
  displayFavicon,
  displayLogo,
  displaySearchIcon,
  introPage,
} from './modules/dom-manipulation';
import { clickLogoLogic, searchBreedsLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

searchBreedsLogic();
introPage();
clickLogoLogic();
displaySearchIcon();
displayLogo();
displayFavicon();

//! **`` npx webpack --watch FOOOOOOOL
//todo **`` Add a loading screen
//todo **`` Get rid of helper console messages
//todo **`` If no breeds are found, make that message appear
//todo **`` Maybe change headers to have cursive font
