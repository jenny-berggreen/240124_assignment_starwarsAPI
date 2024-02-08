const filmsDiv = document.querySelector('#films');
const peopleDiv = document.querySelector('#people');
const planetsDiv = document.querySelector('#planets');
const vehiclesDiv = document.querySelector('#vehicles');

// function to handle click or keypress events
const navigateToPage = (pageUrl) => {
    window.location.href = pageUrl;
};

// function to handle keydown event
const handleKeyDown = (event, pageUrl) => {
    if (event.key === 'Enter') {
        navigateToPage(pageUrl);
    }
};

// click event listeners
filmsDiv.addEventListener('click', () => navigateToPage('../films.html'));
peopleDiv.addEventListener('click', () => navigateToPage('../people.html'));
planetsDiv.addEventListener('click', () => navigateToPage('../planets.html'));
vehiclesDiv.addEventListener('click', () => navigateToPage('../vehicles.html'));

// keyboard event listeners
filmsDiv.addEventListener('keydown', (event) => handleKeyDown(event, '../films.html'));
peopleDiv.addEventListener('keydown', (event) => handleKeyDown(event, '../people.html'));
planetsDiv.addEventListener('keydown', (event) => handleKeyDown(event, '../planets.html'));
vehiclesDiv.addEventListener('keydown', (event) => handleKeyDown(event, '../vehicles.html'));
