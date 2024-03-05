
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
};

const displayFilmData = (data) => {
	console.log(data);

	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	// go through array, display data from the first six objects (number of records)
	for (let i = 0; i < numberOfRecords; i++) {
		const film = data[i];
        displayItem("Title", film.title, i, headerLists);
        displayItem("Episode", film.episode_id, i, dataLists);
        displayItem("Director", film.director, i, dataLists);
        displayItem("Producer", film.producer, i, dataLists);
        displayItem("Release", film.release_date, i, dataLists);
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