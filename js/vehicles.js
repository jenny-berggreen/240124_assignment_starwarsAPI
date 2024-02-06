
// fetch data from API
const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/vehicles/')
	.then(data => {
		// Handle successful response
		displayVehiclesData(data.data.results);
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
}

const displayVehiclesData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	// go through array, display data from the first six objects (number of records)
	for (let i = 0; i < numberOfRecords; i++) {
		let vehicleName = data[i].name; 
		let vehicleModel = data[i].model; 
		let vehicleManufacturer = data[i].manufacturer; 
		let vehicleClass = data[i].vehicle_class; 
		let vehicleCapacity = data[i].cargo_capacity; 
		let vehicleMaxSpeed = data[i].max_atmosphering_speed; 

		displayName(vehicleName, i, headerLists);
		displayModel(vehicleModel, i, dataLists);
		displayManufacturer(vehicleManufacturer, i, dataLists);
		displayClass(vehicleClass, i, dataLists);
		displayCapacity(vehicleCapacity, i, dataLists);
		displayMaxSpeed(vehicleMaxSpeed, i, dataLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Name: ";
	label.classList.add('list-sub-header'); // add class to label to style it yellow
	listItem.appendChild(label); // append label to list item
	listItem.appendChild(document.createTextNode(name)); // append title to listitem
	headerLists[index].appendChild(listItem); // append list item to header list, which is positioned above image
};

const displayModel = (model, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Model: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(model));
	dataLists[index].appendChild(listItem); // append list item to data list
};

const displayManufacturer = (manufacturer, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Manufacturer: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(manufacturer));
	dataLists[index].appendChild(listItem);
};

const displayClass = (vehicleClass, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Vehicle class: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(vehicleClass));
	dataLists[index].appendChild(listItem);
};

const displayCapacity = (capacity, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Capacity: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(capacity));
	dataLists[index].appendChild(listItem);
};

const displayMaxSpeed = (maxSpeed, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Max speed: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(maxSpeed));
	dataLists[index].appendChild(listItem);
};

// call fetch function
fetchSWdata();