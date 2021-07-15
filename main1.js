window.addEventListener('DOMContentLoaded', CallApiWithFetchAsync);
function CallApiWithFetchAsync(){
const img = document.getElementsByClassName('api-image');

	for (let image of img ){
		const { clientWidth, clientHeight } = image;
		let image = `http://placekitten.com/g/${width}/${height}`;
        const responseBlob = await image.blob(); // convert the readable stram to blob to work with it.
        const urlObject = URL.createObjectURL(responseBlob);
        img[index].setAttribute('src', urlObject);
        setImageWithDelay(img[index], image, delay);

    }
}
function setImageWithDelay(element, link, delay){
	setTimeout(() => {
		element.setAttribute('src', link);
	}, delay * 1000);
}