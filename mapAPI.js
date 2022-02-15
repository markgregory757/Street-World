// add fetch request to populate with pin on flag selection
// export your function to run in script file
const mapDIV = document.getElementById("map");
console.dir(mapDIV);
fetch("https://google-maps-geocoding-plus.p.rapidapi.com/geocode?address=121%20Buffalo%20View%20Ln%2C%20Georgetown%2C%20TX%2078628&language=en")
.then(response => {
	console.log(response);
    return response.json()
})
.catch(err => {
	console.error(err);
});