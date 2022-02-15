// OPTIONAL with time 
// add fetch request to populate on flag selection 
// chooses animal based on continent
// export your function to run in script file

const animals = document.getElementById('animals');
const animalDIV
// fetch('https://apps.des.qld.gov.au/species/?op=getkingdomnames&f=json')
//     .then(res => {
//         if (res.ok) {
//             console.log('SUCCESS')
//         } else {
//             console.log("Not Scuccessful")
//         }
        
//         // res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))

fetch("https://wildlife-live1.p.rapidapi.com/news", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wildlife-live1.p.rapidapi.com",
		"x-rapidapi-key": "eb96f7f1e1msh91ed702448a750bp1ce958jsnc91cef2e7681"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});