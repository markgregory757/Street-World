const countryArt = (country) => {

 const streetArtDIV = document.getElementById("streetArtDIV")
 const mapDIV = document.getElementById("mapDIV")
 
 fetch(`https://street-art.p.rapidapi.com/country/${country}`, {
     "method": "GET",
     "headers": {
         "x-rapidapi-host": "street-art.p.rapidapi.com",
         "x-rapidapi-key": "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec"
        }
    })
    .then(response => response.json())
    .then(result => {
        
        result.forEach((streetArtInfo, index) => {
            if (index <= 2) {
                console.log(streetArtInfo)

                streetArtDIV.innerHTML += `<img src=${streetArtInfo.pictLink} style="height: 400px; width: 450px;"/> `
                mapDIV.innerHTML = `
                <img src="${streetArtInfo.linkOpenStreetMap}"/>`
                console.log(streetArtInfo.linkOpenStreetMap)
                
            console.log(streetArtInfo.pictLink)
            }
        });
    })
    .catch(error => console.log('error', error));
}

export { countryArt }