const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/planets/')
	.then(data => displayPlanetsData(data.data.results))
};

const displayPlanetsData = (data) => {
	console.log(data);
};

fetchSWdata();