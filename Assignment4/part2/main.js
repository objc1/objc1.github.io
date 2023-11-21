/*
	Name: Maxim Leypunskiy
	File: main.js
	Date: 20 November 2023
  Description: A JavaScript-powered image gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const fileAlts = ["Closeup of a human eye", "Rock that looks like a wave", "Purple and white pansies", "Section of wall from a pharoah's tomb", "Large moth on a leaf"];

/* Looping through images */
for (var index = 0; index < filenames.length; ++index) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', "images/" + filenames[index]);
	newImage.setAttribute('alt', fileAlts[index]);
	thumbBar.appendChild(newImage);

	newImage.addEventListener("click", event => {
		displayedImage.src = newImage.src;
		displayedImage.alt = newImage.alt;
	})
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", event => {
	if (btn.getAttribute("class") === "dark") {
		btn.setAttribute("class", "light");
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	} else {
		btn.setAttribute("class", "dark");
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
})