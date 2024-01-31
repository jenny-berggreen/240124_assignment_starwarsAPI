const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/films/')
	.then(data => displayFilmData(data.data.results))
};

const displayFilmData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	for (let i = 0; i < numberOfRecords; i++) {
		let filmTitle = data[i].title;
		let filmEpisode = data[i].episode_id;
		let filmDirector = data[i].director;
		let filmProducer = data[i].producer;

		displayTitle(filmTitle, i, headerLists);
		displayEpisode(filmEpisode, i, dataLists);
		displayDirector(filmDirector, i, dataLists);
		displayProducer(filmProducer, i, dataLists);
	}
	
};
  
const displayTitle = (title, index, headerLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Title: " + title;
	headerLists[index].appendChild(listItem);
};

const displayEpisode = (episode, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Episode: " + episode;
	dataLists[index].appendChild(listItem);
};

const displayDirector = (director, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Director: " + director;
	dataLists[index].appendChild(listItem);
};

const displayProducer = (producer, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Producers: " + producer;
	dataLists[index].appendChild(listItem);
};

fetchSWdata();