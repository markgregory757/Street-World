

fetch("https://country-flags.p.rapidapi.com/svg/us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "country-flags.p.rapidapi.com",
		"x-rapidapi-key": "eb96f7f1e1msh91ed702448a750bp1ce958jsnc91cef2e7681"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});