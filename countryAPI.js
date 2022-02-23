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
        
        if (country.name === "Italy" ||
        country.name === "Canada" ||
        country.name === "Germany" ||
        country.name === "France" ||
        country.name === "Belgium" ||
        country.name === "Australia" ||
        country.name === "United Kingdom" ||
        country.name === "Spain" ||
        country.name === "Mexico" ||
        country.name === "Thailand" ||
        country.name === "Turkey" ||
        country.name === "Mexico" ||
        country.name === "Thailand" ||
        country.name === "Greece"||
        country.name === "Russia" ||
        country.name === "Japan" ||
        country.name === "Saudi Arabia" ||
        country.name === "Poland" ||
        country.name === "South Korea" ||
        country.name === "Netherlands" ||
        country.name === "Ukraine" ||
        country.name === "Ecuador" ||
        country.name === "Chile" ||
        country.name === "Argentina" ||
        country.name === "Israel" ||
        country.name === "Ireland" ||
        country.name === "India" ||
        country.name === "Netherlands" ||
        country.name === "Brazil") {
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
            // var modal = document.getElementById("modal");
            countryArt(e.target.children[0].innerText)
            // modal.style.display = "block";
            // modalImg.src = this.src;
            // var span = document.getElementsByClassName("close-button")[0];
            // span.onclick = function() {
            //     modal.style.display = "none";
            //   } 
        } 
        else if (e.target.className === "countryName"){
        //     var modal = document.getElementById("modal");
          countryArt(e.target.innerText) 
        //  modal.style.display = "block";
        //  modalImg.src = this.src;
        //  var span = document.getElementsByClassName("close-button")[0];
        //  span.onclick = function() {
        //    modal.style.display = "none";
         } 
        // }
    })
}

// Get the modal

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal

export { countryInfo }; 