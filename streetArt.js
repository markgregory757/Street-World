const countryArt = (country) => {

 const streetArtDIV = document.getElementById("streetArtDIV")
<<<<<<< HEAD

const mapDIV = document.getElementById('mapDIV')
console.log(mapDIV);
    fetch(`https://street-art.p.rapidapi.com/country/${country}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "street-art.p.rapidapi.com",
            "x-rapidapi-key": "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec"
=======
 
 fetch(`https://street-art.p.rapidapi.com/country/${country}`, {
     "method": "GET",
     "headers": {
         "x-rapidapi-host": "street-art.p.rapidapi.com",
         "x-rapidapi-key": "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec"
>>>>>>> main
        }
    })
    .then(response => response.json())
    .then(result => {
        
        result.forEach((streetArtInfo, index) => {
            if (index <= 2) {

                streetArtDIV.innerHTML += `<img src=${streetArtInfo.pictLink} style="height: 400px; width: 450px;"/> `
<<<<<<< HEAD
                mapDIV.innerHTML = `
                <img src="${streetArtInfo.linkOpenStreetMap}" >
                `
                console.log(streetArtInfo.linkOpenStreetMap, 11111111)
            console.log(streetArtInfo.pictLink)
=======
                console.log(streetArtInfo.pictLink)
>>>>>>> main
            }
        });
    })
    .catch(error => console.log('error', error));
}

export { countryArt }