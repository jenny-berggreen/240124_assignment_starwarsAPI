
// fetch data from API
const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/films/')
	.then(data => {
		// Handle successful response
		displayFilmData(data.data.results);
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

const displayFilmData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	// go through array, display data from the first six objects (number of records)
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
	label.classList.add('list-sub-header'); // add class to label to style it yellow
	listItem.appendChild(label); // append label to list item
	listItem.appendChild(document.createTextNode(title)); // append title to listitem
	headerLists[index].appendChild(listItem); // append list item to header list, which is positioned above image
};

const displayEpisode = (episode, index, dataLists) => {
	const listItem = document.createElement('li');
	const label = document.createElement('span');
	label.innerText = "Episode: ";
	label.classList.add('list-sub-header');
	listItem.appendChild(label);
	listItem.appendChild(document.createTextNode(episode));
	dataLists[index].appendChild(listItem); // append list item to data list
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

// call fetch function
fetchSWdata();