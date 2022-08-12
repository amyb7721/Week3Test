 function colorButton(evt) {
   evt.preventDefault();
   alert('fav color purple');
 }

 let form1 = document.querySelector('#color');
 form1.addEventListener('click', colorButton);

 
 function place(evt) {
   evt.preventDefault();
   alert('fav place is the beach');
 }

 let form2 = document.querySelector('#place');
 form2.addEventListener('click', place);

 
 
 function ritual(evt) {
   evt.preventDefault();
   alert('i have to run with music');
 }

 let form3 = document.querySelector('#ritual');
 form3.addEventListener('click', ritual);











//  function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	alert('form submit');
// }


// let form = document.querySelector('#contact');

// form.addEventListener('submit', handleSubmit);

// function cat(evt) {
// 	alert('You are cool!');
// }

// let img = document.querySelector('img');
// img.addEventListener('mouseover', cat);

