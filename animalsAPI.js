// OPTIONAL with time 
// add fetch request to populate on flag selection 
// chooses animal based on continent
// export your function to run in script file

const animals = document.getElementById('animals');

fetch('https://apps.des.qld.gov.au/species/?op=getkingdomnames&f=json')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log("Not Scuccessful")
        }
        
        // res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))