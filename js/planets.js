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
	toast.textContent = `Error fetching data: ${error}`;
	toast.style.display = 'block';
	setTimeout(() => {
		toast.style.display = 'none';
	}, 5000);
}

const displayPlanetsData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	for (let i = 0; i < numberOfRecords; i++) {
		let planetName = data[i].name;
		let planetPopulation = data[i].population;
		let planetDiameter = data[i].diameter;
		let planetClimate = data[i].climate;
		let planetTerrain = data[i].terrain;
		let planetGravity = data[i].gravity;
		let planetRotation = data[i].rotation_period;

		displayName(planetName, i, headerLists);
		displayPopulation(planetPopulation, i, dataLists);
		displayDiameter(planetDiameter, i, dataLists);
		displayClimate(planetClimate, i, dataLists);
		displayTerrain(planetTerrain, i, dataLists);
		displayGravity(planetGravity, i, dataLists);
		displayRotation(planetRotation, i, dataLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Name: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(name));
	headerLists[index].appendChild(listItem);
};

const displayPopulation = (population, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Population: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(population));
	dataLists[index].appendChild(listItem);
};

const displayDiameter = (diameter, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Diameter: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(diameter));
	dataLists[index].appendChild(listItem);
};

const displayClimate = (climate, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Climate: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(climate));
	dataLists[index].appendChild(listItem);
};

const displayTerrain = (terrain, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Terrain: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(terrain));
	dataLists[index].appendChild(listItem);
};

const displayGravity = (gravity, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Gravity: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(gravity));
	dataLists[index].appendChild(listItem);
};

const displayRotation = (rotation, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Rotation: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(rotation));
	dataLists[index].appendChild(listItem);
};

fetchSWdata();