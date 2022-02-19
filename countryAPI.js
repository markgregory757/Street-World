import { countryArt } from "./streetArt.js";

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
        

        if (index < 30) {
// try hiding country name  style="visibility: hidden"

        let tempFlag = `
            <div class="container">
                <div class="row">
                    <div class="col" style="font-size: 50px">
                    ${country.flag} 
                        <span class="countryName" style="font-size: 10px"> 
                            ${country.name}
                        </span>
                    </div>
                </div>
            </div>
            `;
            countriesDIV.innerHTML += tempFlag
        }
    });
    
    const streetArtDIV = document.getElementById("streetArtDIV")
    
    countriesDIV.addEventListener("click", (e) => {
        e.preventDefault();
        streetArtDIV.innerHTML = ""
        if (e.target.className === "col") {
            console.dir(e.target.children[0].innerText)
           countryArt(e.target.children[0].innerText)
        } 
        else if (e.target.className === "countryName"){
            countryArt(e.target.innerText)
        }
    })
}

export { countryInfo }; 