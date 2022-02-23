

----INTRODUCTION
StreetWorld is an App that shows the diffrent street art work across the world.
By cliking on one of the Country flags, you will see some street art work in that Country.


----MOTIVATION
Through our admiration of art work we were drawn to create a fun and educational application, 
that allows the user to experience art work from around the world while sitting at the comfort of their own home.
With such a lively, robust and diverse art world that has continued to grow in new forms and styles, we wanted people to be able to see a particular art form that has, in recent times grown to be a class on it's own. People of all ages turning plane walls of buildings into a canvas for colorful and unique art work. We wanted to add a place where people could view and enjoy the artwork without having to travel to it's location.


----BUILD STATUS
Currently the application is displaying artwork from about 30 countries. We are working to expand the amount of countries and artwork that is available on the app. We currently have a working World Globe that is inneractive and the user can zoom in anywhere in the world, future developments will give the Globe pindrops added to them so you can see the exact location of the artwork. 


----CODE STYLE AND FRAME WORK
The app was created using JavaScript. 

We created an HTML landing page and a CSS formatting page. A seperate JavaScript file was created to hold the fetch functions to render files of information. Our Globe was created on a seperat Script that loaded modules from the JS Library. 

We rendered the diffrent art work through a function that used the fetch method...
___________
const countryArt = (country) => {

	const streetArtDIV = document.getElementById("streetArtDIV")
	fetch(`https://street-art.p.rapidapi.com/country/${country}`, ...
___________

We then exported those results to another function that attached it to a button method that was applied to the list of Country flags. This is where you are able to see the diffrent art work upon cliking the flags. 
___________
const streetArtDIV = document.getElementById("streetArtDIV")
    
    countriesDIV.addEventListener("click", (e) => {
        e.preventDefault();
        streetArtDIV.innerHTML = ""    ...
___________

The Globe was created on a seperate file using the require method to acquire modules from the JS Library.
The modules were used for creating, viewing and adding layers to the Globe. 
___________
require([   // We use the "require" method to load modules from the JS library. 
"esri/Map", // loads code for creating a Map.
"esri/views/SceneView", // loads code for viewing the Map in 3D.   ...
___________



----API REFERENCE
StreetArt API
© 2021 by Cyber Planet

Country Info API
by workmates-lab

ArcGIS
by The Half-Earth Project


---CREDITS
Eliza Thomas - Chief Editor & Developer
Roger Roque - Acquisition & Developer
Mark Gomez - Logistics & Developer