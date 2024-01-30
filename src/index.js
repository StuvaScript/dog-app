import { introPage } from './modules/dom-manipulation';
import { clickLogoLogic, searchBreedsLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

searchBreedsLogic();
introPage();
clickLogoLogic();

//todo **`` Add a loading screen
//todo **`` Add favicon
//todo **`` Get rid of helper console messages
//todo **`` Build a back button. Store the retrieved data in an object for faster 'back' loading
