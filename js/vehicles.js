const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/vehicles/')
	.then(data => displayVehiclesData(data.data.results))
};

const displayVehiclesData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	for (let i = 0; i < numberOfRecords; i++) {
		let vehicleName = data[i].name; 

		displayName(vehicleName, i, headerLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Name: " + name;
	headerLists[index].appendChild(listItem);
};

fetchSWdata();