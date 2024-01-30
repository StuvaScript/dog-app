import { introPage } from './modules/dom-manipulation';
import { clickLogoLogic, searchBreedsLogic } from './modules/event-handlers';
import './normalize.css';
import './style.css';

searchBreedsLogic();
introPage();
clickLogoLogic();

//todo **`` Working on back button. Need to build a small array with the info at 'function.js' line 42. The info is called from 'searchForBreed()' in 'function.js' and displayed with 'displayBreeds()' in 'dom-manipulation.js'. I need to store that data and when I click the back button, it displays that data from the array.

//todo **`` Add a loading screen
//todo **`` Add favicon
//todo **`` Get rid of helper console messages
//todo **`` Build a back button. Store the retrieved data in an object for faster 'back' loading
//todo **`` Make the 'removeDogs()' function remove the form also once you get the back button working
//todo **`` If no breeds are found, make that message appear
