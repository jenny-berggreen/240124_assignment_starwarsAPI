const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/planets/')
	.then(data => displayPlanetsData(data.data.results))
};

const displayPlanetsData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	for (let i = 0; i < numberOfRecords; i++) {
		let planetName = data[i].name;
		let planetPopulation = data[i].population;

		displayName(planetName, i, headerLists);
		displayPopulation(planetPopulation, i, dataLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Name: " + name;
	headerLists[index].appendChild(listItem);
};

const displayPopulation = (population, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Population: " + population;
	dataLists[index].appendChild(listItem);
};

fetchSWdata();