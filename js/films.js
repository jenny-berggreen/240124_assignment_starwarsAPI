const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/films/')
	.then(data => displayFilmData(data.data.results))
};