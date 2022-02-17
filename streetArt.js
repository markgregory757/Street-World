// OPTIONAL with time 
// add fetch request to populate on flag selection 
// chooses street art based on country
// export your function to run in script file

function countryArt() {

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "street-art.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    fetch("https://street-art.p.rapidapi.com/random/5\"", requestOptions)
    .then(response => response.text())
    .then(result => {
        const json = result;
        const obj = JSON.parse(json);
        console.log(result)
    })
    .catch(error => console.log('error', error));

    
}
    

export{countryArt}
