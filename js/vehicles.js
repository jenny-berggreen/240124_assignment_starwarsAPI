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
		let vehicleModel = data[i].model; 

		displayName(vehicleName, i, headerLists);
		displayModel(vehicleModel, i, dataLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Name: " + name;
	headerLists[index].appendChild(listItem);
};

const displayModel = (model, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Model: " + model;
	dataLists[index].appendChild(listItem);
};

fetchSWdata();