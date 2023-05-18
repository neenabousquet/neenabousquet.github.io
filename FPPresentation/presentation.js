let section = 
document.querySelectorAll("section");
let menu =
document.querySelectorAll("header nav a");

window.onscroll= () => {
	section.forEach((i)=>{
		let top= window.scrollY;
		let offset= i.offestTop - 150;
		let height = i.offsetHeight;
		let id = i.getAttribute("id");

		if(top >= offset && top < offset + height) {
			menu.forEach((link) => {

				link.classlist.remove("active");
				document.querySelector("header nav a[href*= " +id +']')
				.classList.add("active");
				});
			}
		});
	};

function reveal () {
	let reveals = 
	document.querySelectorAll(".reveal")

	for (let i=0; i< reveals.length; i++) {
		let windowHeight = window.innerHeight; 
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 150; 

		if(elementTop<windowHeight - elementVisible){

			reveals[i].classList.add("active");} else{

				reveals[i].classList.remove("active");
			}
		}
	}