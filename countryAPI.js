const countriesDIV = document.getElementById("countriesDIV")
const countryName = document.createElement("countryName");

async function countryInfo() {
    const response = await fetch("https://country-info.p.rapidapi.com/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "country-info.p.rapidapi.com",
            "x-rapidapi-key": "da6125f67emshd20909b46c37171p181a6cjsn343f3136cea7"
        }
    });

    const data = await response.json();
    
    data.forEach((country, index) => {
        
        if (index < 30) {

        let tempFlag = `
            <div class="container">
                <div class="row">
                    <div class="col">
                    ${country.flag} ${country.name}
                    </div>
                </div>
            </div>
            `;
            countriesDIV.innerHTML += tempFlag
        }
    });

    countriesDIV.addEventListener("click", (e) =>
    console.log(e.target))
}

export { countryInfo }; 