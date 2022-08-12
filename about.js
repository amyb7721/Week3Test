console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function cat(evt) {
	alert('You are cool!');
}

let img = document.querySelector('img');
img.addEventListener('mouseover', cat);





// const showAlert = () => {
// 	alert('You are awesome!')
// }
// img.addEventListener('mouseover', showAlert)