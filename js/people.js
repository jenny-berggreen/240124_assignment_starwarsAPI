
// fetch data from API
const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/people/')
	.then(data => {
		// Handle successful response
		displayPeopleData(data.data.results);
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

const displayPeopleData = (data) => {
	console.log(data);

	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const cards = document.querySelectorAll('.card');
	let numberOfCards = cards.length;

	// go through array, display data from the first six objects (number of cards)
	for (let i = 0; i < numberOfCards; i++) {
		const person = data[i];
        displayItem("Name", person.name, i, headerLists);
        displayItem("Gender", person.gender, i, dataLists);
        displayItem("Skin color", person.skin_color, i, dataLists);
        displayItem("Eye color", person.eye_color, i, dataLists);
        displayItem("Height", person.height, i, dataLists);
        displayItem("Mass", person.mass, i, dataLists);
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