const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/people/')
	.then(data => displayPeopleData(data.data.results))
};

const displayPeopleData = (data) => {
	console.log(data);
}

fetchSWdata();