import './normalize.css';
import './style.css';

const apiKey = process.env.API_KEY;

console.log(apiKey);

fetchImage();

async function fetchImage() {
  try {
    const response = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?api_key=${apiKey}&limit=100&has_breeds=1&q=air`,
      {
        mode: 'cors',
      },
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
