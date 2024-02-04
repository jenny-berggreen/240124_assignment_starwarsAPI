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
		let filmRelease = data[i].release_date;

		displayTitle(filmTitle, i, headerLists);
		displayEpisode(filmEpisode, i, dataLists);
		displayDirector(filmDirector, i, dataLists);
		displayProducer(filmProducer, i, dataLists);
		displayRelease(filmRelease, i, dataLists);
	}
	
};
  
const displayTitle = (title, index, headerLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Title: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(title));
	headerLists[index].appendChild(listItem);
};

const displayEpisode = (episode, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Episode: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(episode));
	dataLists[index].appendChild(listItem);
};

const displayDirector = (director, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Director: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(director));
	dataLists[index].appendChild(listItem);
};

const displayProducer = (producer, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Producer: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(producer));
	dataLists[index].appendChild(listItem);
};

const displayRelease = (release, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Release: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(release));
	dataLists[index].appendChild(listItem);
};

fetchSWdata();