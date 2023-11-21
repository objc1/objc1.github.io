/*
	Name: Maxim Leypunskiy
	File: index.html
	Date: 20 November 2023
  Description: A fun app that generates random silly stories
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const fileAlts = ["Closeup of a human eye", "Rock that looks like a wave", "Purple and white pansies", "Section of wall from a pharoah's tomb", "Large moth on a leaf"];

/* Declaring the alternative text for each image file */

/* Looping through images */

for (var index = 0; index < filenames.length; ++index) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', fileAlts[index]);
	newImage.setAttribute('alt', fileAlts[index]);
	thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
