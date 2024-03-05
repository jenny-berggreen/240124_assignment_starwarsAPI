
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
};

const displayVehiclesData = (data) => {
	console.log(data);

	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	// go through array, display data from the first six objects (number of records)
	for (let i = 0; i < numberOfRecords; i++) {
		const vehicle = data[i];
        displayItem("Name", vehicle.name, i, headerLists);
        displayItem("Model", vehicle.model, i, dataLists);
        displayItem("Manufacturer", vehicle.manufacturer, i, dataLists);
        displayItem("Class", vehicle.vehicle_class, i, dataLists);
        displayItem("Capacity", vehicle.cargo_capacity, i, dataLists);
        displayItem("Max speed", vehicle.max_atmosphering_speed, i, dataLists);
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