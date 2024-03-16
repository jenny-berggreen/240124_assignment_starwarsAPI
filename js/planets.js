
// fetch data from API
const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/planets/')
	.then(data => {
		// Handle successful response
		displayPlanetsData(data.data.results);
	  })
	  .catch(error => {
		// Handle errors
		displayErrorMessage(error);
	  });
};

const displayErrorMessage = (error) => {
	const toast = document.querySelector('.toast');
	toast.textContent = `Error fetching data: ${error}`; // insert error
	toast.style.display = 'block';
	setTimeout(() => { // display toast for 5 seconds
		toast.style.display = 'none';
	}, 5000);
};

const displayPlanetsData = (data) => {
	console.log(data);

	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const cards = document.querySelectorAll('.card');
	let numberOfCards = cards.length;

	// go through array, display data from the first six objects (number of cards)
	for (let i = 0; i < numberOfCards; i++) {
		const planet = data[i];
        displayItem("Name", planet.name, i, headerLists);
        displayItem("Population", planet.population, i, dataLists);
        displayItem("Diameter", planet.diameter, i, dataLists);
        displayItem("Climate", planet.climate, i, dataLists);
        displayItem("Terrain", planet.terrain, i, dataLists);
        displayItem("Gravity", planet.gravity, i, dataLists);
        displayItem("Rotation", planet.rotation_period, i, dataLists);
	}
};
  
const displayItem = (label, value, index, lists) => {
    const listItem = document.createElement('li');
    const labelElement = document.createElement('span');
    labelElement.innerText = `${label}: `;
    labelElement.classList.add('list-sub-header');
    listItem.appendChild(labelElement);
    listItem.appendChild(document.createTextNode(value));
    lists[index].appendChild(listItem);
};

// call fetch function
fetchSWdata();