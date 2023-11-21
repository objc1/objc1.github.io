/* 
	Name: Maxim Leypunskiy
	File: main.js
	Date: 20 November 2023
  Description: A fun app that generates random silly stories
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

var storyTex = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array) {
	const random = Math.floor(Math.random() * array.length);
	return array[random];
}

randomize.addEventListener('click', result);

function result() {
	var newStory = storyTex;
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

	newStory = newStory.replaceAll(":insertx:", xItem);
	newStory = newStory.replaceAll(":inserty:", yItem);
	newStory = newStory.replaceAll(":insertz:", zItem);

	if (customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replaceAll("Bob", name);
	}

	if (document.getElementById("uk").checked) {
		const weight = Math.round(300 / 14.0) + " stone";
		const temperature = Math.round((94 - 32) * 5.0 / 9.0) + " centigrade";
		newStory = newStory.replaceAll("94 fahrenheit", temperature);
		newStory = newStory.replaceAll("300 pounds", weight);
	}

	story.textContent = newStory;
	story.style.visibility = 'visible';
}
