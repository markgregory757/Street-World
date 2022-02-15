

fetch("https://travel-places.p.rapidapi.com/", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "travel-places.p.rapidapi.com",
		"x-rapidapi-key": "eb96f7f1e1msh91ed702448a750bp1ce958jsnc91cef2e7681"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});









// console.log
// function callData(country) {


// fetch("https://country-info.p.rapidapi.com/", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "country-info.p.rapidapi.com",
//         "x-rapidapi-key": "da6125f67emshd20909b46c37171p181a6cjsn343f3136cea7"
//     }
// })
// .then(response => response.json())
// .then (data => console.log(data))

// }