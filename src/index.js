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
//todo **`` The '.list-wrapper' subgrid and grid row behavior is acting funny. When you search 'poodle' or 'belgian' and only two dogs show up, the names are far from the pictures. Mess with the 'auto row'
