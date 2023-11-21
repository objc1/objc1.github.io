/* 
	Name: Maxim Leypunskiy
	File: index.html
	Date: 20 November 2023
  Description: A fun app that generates random silly stories
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
