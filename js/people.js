const fetchSWdata = ()=> {
	axios.get('https://swapi.dev/api/people/')
	.then(data => displayPeopleData(data.data.results))
};

const displayPeopleData = (data) => {
	console.log(data);
	const headerLists = document.querySelectorAll('.header-list');
	const dataLists = document.querySelectorAll('.data-list');
	const records = document.querySelectorAll('.grid-item__record');
	let numberOfRecords = records.length;

	for (let i = 0; i < numberOfRecords; i++) {
		let personName = data[i].name;

		displayName(personName, i, headerLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Name: " + name;
	headerLists[index].appendChild(listItem);
};

fetchSWdata();