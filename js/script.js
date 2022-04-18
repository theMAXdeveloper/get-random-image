const button = document.querySelector("button");
// show image button
const authorSpan = document.querySelector(".author");
// h3 span 
const imgDiv = document.querySelector(".image-container");
// container/div for image
const img = document.querySelector(".img");
// img element

const getImage = async function () {
	const res = await fetch ("https://picsum.photos/v2/list?limit=100");
	const images = await res.json();
	selectRandomImage(images);
	//console.log(images);
};



const selectRandomImage = function (images) {
	const randomIndex = Math.floor(Math.random() * images.length);
	//console.log(randomIndex);
	const randomImage = images[randomIndex];
	//console.log(randomImage);
	displayImage (randomImage);
};

const displayImage = function (randomImage) {
	const author = randomImage.author;
	const imageAddress = randomImage.download_url;
	authorSpan.innerText = author;
	img.src = imageAddress;
	imgDiv.classList.remove("hide");
};	

button.addEventListener("click", function () {
	getImage();
});