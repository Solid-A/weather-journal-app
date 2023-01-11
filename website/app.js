/* Global Variables */
const apiKey = 'bdca2a0e0d5dba18b3fe94cb98a82291&units=imperial'; // Personal API Key for OpenWeatherMap API
const button = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'/'+ d.getDate()+'/'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
button.addEventListener('click', () =>{
    const zipCode = document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},&appid=${apiKey}`;
    const fetchApi = myData(url);
    fetchApi.then((data) =>{
        console.log(data);
        const apiData = {
            myTemp: data.main.temp,
            theFeeling: feeling,
            theDate: newDate
        }
        postData('/add', apiData);
    }).then(() => retrieveData())
})

const myData = async (url) =>{
    const res = await fetch(url);
    try {
        const allData = await res.json();
        return allData;
    } catch (err) {
        console.log("error", err);
    }
}

/* Function to POST data */
const postData = async (addRoute, apiData) => {
    const res = await fetch(addRoute, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData), 
    });
    try {
        const allData = await res.json();
        return allData;
    } catch (err) {
        console.log("error", err);
    }
}

/* Function to GET Project Data */
const retrieveData = async () =>{
    const req = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await req.json();
        console.log(allData);
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = 'Temp: ' + Math.round(allData.myTemp) + 'degrees';
        document.getElementById('content').innerHTML = 'Feeling: ' + allData.theFeeling;
        document.getElementById('date').innerHTML = 'Date: ' + allData.theDate;
    }
    catch (error) {
        console.log('error', error);
    }
}