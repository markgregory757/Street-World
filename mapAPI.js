// add fetch request to populate with pin on flag selection
// export your function to run in script file




fetch("https://travel-places.p.rapidapi.com/", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "travel-places.p.rapidapi.com",
		"x-rapidapi-key": "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec"
	}
})
.then(response => {
	console.log(response);
 bd9ec194a07f9ab51a80f23981ac24adc9e55756
})
.catch(err => {
	console.error(err);
});