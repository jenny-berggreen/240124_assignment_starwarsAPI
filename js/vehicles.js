const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/vehicles/')
	.then(data => displayVehiclesData(data.data.results))
};

const displayVehiclesData = (data) => {
	console.log(data);
};

fetchSWdata();