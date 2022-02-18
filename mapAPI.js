// add fetch request to populate with pin on flag selection
// export your function to run in script file
<<<<<<< HEAD
const mapDIV = document.getElementById("map");
console.dir(mapDIV);
fetch("https://google-maps-geocoding-plus.p.rapidapi.com/geocode?address=121%20Buffalo%20View%20Ln%2C%20Georgetown%2C%20TX%2078628&language=en")
.then(response => {
	console.log(response);
    return response.json()
=======


fetch("https://travel-places.p.rapidapi.com/", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "travel-places.p.rapidapi.com",
		"x-rapidapi-key": "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec"
	}
})
.then(response => {
	console.log(response);
>>>>>>> bd9ec194a07f9ab51a80f23981ac24adc9e55756
})
.catch(err => {
	console.error(err);
});