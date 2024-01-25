const filmsDiv = document.querySelector('#films');
const peopleDiv = document.querySelector('#people');
const planetsDiv = document.querySelector('#planets');
const vehiclesDiv = document.querySelector('#vehicles');

filmsDiv.addEventListener('click', function() {
	window.location.href = '../films.html';
});

peopleDiv.addEventListener('click', function() {
	window.location.href = '../people.html';
});

planetsDiv.addEventListener('click', function() {
	window.location.href = '../planets.html';
});

vehiclesDiv.addEventListener('click', function() {
	window.location.href = '../vehicles.html';
});