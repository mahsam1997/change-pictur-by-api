// When Page HTML elements are loaded
window.addEventListener('DOMContentLoaded', CallApiWithFetchAsync);

function CallApiWithFetchAsync(){
	let width;
	let height;
	let image;
	let delay = 0;
	const $images = document.getElementsByClassName('api-image');
	for (index=0; index<$images.length; index++){
		width = $images[index].getAttribute('width');
		height = $images[index].getAttribute('height');
		image = `http://placekitten.com/g/${width}/${height}`;
		// delay = index+1; // Comment to remove delay
		setImageWithDelay($images[index], image, delay);
	}
}
function setImageWithDelay(element, link, delay){
	setTimeout(() => {
		element.setAttribute('src', link);
	}, delay * 1000);
}

