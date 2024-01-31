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
		let personGender = data[i].gender;
		let personSkinColor = data[i].skin_color;
		let personEyeColor = data[i].eye_color;
		let personHeight = data[i].height;
		let personMass = data[i].mass;

		displayName(personName, i, headerLists);
		displayGender(personGender, i, dataLists);
		displaySkinColor(personSkinColor, i, dataLists);
		displayEyeColor(personEyeColor, i, dataLists);
		displayHeight(personHeight, i, dataLists);
		displayMass(personMass, i, dataLists);
	}
};

const displayName = (name, index, headerLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Name: " + name;
	headerLists[index].appendChild(listItem);
};

const displayGender = (gender, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Gender: " + gender;
	dataLists[index].appendChild(listItem);
};

const displaySkinColor = (skinColor, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Skin color: " + skinColor;
	dataLists[index].appendChild(listItem);
};

const displayEyeColor = (eyeColor, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Eye color: " + eyeColor;
	dataLists[index].appendChild(listItem);
};

const displayHeight = (height, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Height: " + height;
	dataLists[index].appendChild(listItem);
};

const displayMass = (mass, index, dataLists) => {
	const listItem = document.createElement('li');
	listItem.innerText = "Mass: " + mass;
	dataLists[index].appendChild(listItem);
};

fetchSWdata();