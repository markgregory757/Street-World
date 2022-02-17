const countriesDIV = document.getElementById("countriesDIV")
const countryName = document.createElement("countryName");

async function countryInfo() {

// ** When one API runs out of calls for the day engage another chunk of API code **
    
    //Marks RapidAPI
    // const response = await fetch("https://country-info.p.rapidapi.com/", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "country-info.p.rapidapi.com",
    //         "x-rapidapi-key": "eb96f7f1e1msh91ed702448a750bp1ce958jsnc91cef2e7681"
    //     }
    // });

    //Rogers RapidAPI
    // const response = await fetch("https://country-info.p.rapidapi.com/", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "country-info.p.rapidapi.com",
    //         "x-rapidapi-key": "256bdc8139mshc95b18bdc3d05e8p102f0bjsnf45913349eec"
    //     }
    // });

    //Elizas RapidAPI
    const response = await fetch("https://country-info.p.rapidapi.com/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "country-info.p.rapidapi.com",
            "x-rapidapi-key": "da6125f67emshd20909b46c37171p181a6cjsn343f3136cea7"
        }
    });

    const data = await response.json();
    
    data.forEach((country, index) => {
        
        // if (index < 30) {

        let tempFlag = `
            <div class="container">
                <div class="row">
                    <div class="col">
                    ${country.flag}
                    </div>
                </div>
            </div>
            `;
            countriesDIV.innerHTML += tempFlag
        //}
    });

    countriesDIV.addEventListener("click", (e) =>
    console.log(e.target))
}

export { countryInfo }; 