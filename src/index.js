import {
  displayFavicon,
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

//todo **`` Update README.md
