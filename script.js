
let destinations = [];
let currentResults = [];

// LOAD CSV DATASET
fetch("tourism_dataset.csv")
.then(response => response.text())
.then(data => {

let rows = data.split("\n").slice(1);

rows.forEach(row => {

let cols = row.split(",");

if(cols.length < 9) return;

let place = {
place: cols[0],
state: cols[1],
type: cols[2],
season: cols[3],
month: cols[4],
budget: Number(cols[5]),
days: Number(cols[6]),
rating: Number(cols[7]),
image: cols[8]
};

destinations.push(place);

});

console.log("Dataset Loaded:", destinations);

});


// SEARCH FUNCTION
function explore(){

let input = document.getElementById("searchInput").value.toLowerCase();

let results = destinations.filter(place =>
place.place.toLowerCase().includes(input)
);

currentResults = results;

displayResults(results);

}


// FORM RECOMMENDATION
function recommendPlace(){

let budget = document.getElementById("budget").value;
let season = document.getElementById("season").value;
let month = document.getElementById("month").value;

let results = destinations.filter(place =>

(place.budget <= budget || budget === "") &&
(place.season === season || season === "") &&
(place.month === month || month === "")

);

currentResults = results;

displayResults(results);

}


// CATEGORY FILTER
function recommendByCategory(category){

let results = destinations.filter(place =>
place.type === category
);

currentResults = results;

displayResults(results);

}


// RANDOM RECOMMENDATION
function recommend(){

let shuffled = [...destinations].sort(() => 0.5 - Math.random());

let results = shuffled.slice(0,5);

currentResults = results;

displayResults(results);

}


// DISPLAY RESULTS
function displayResults(list){

let container = document.getElementById("resultList");

container.innerHTML="";

if(list.length===0){
container.innerHTML="<p>No destinations found</p>";
return;
}

list.forEach(item=>{

let card=document.createElement("div");

card.className="result-card";

card.innerHTML=`

<img src="images/${item.image}">

<div class="card-info">

<h3>${item.place}</h3>

<p>📍 ${item.state}</p>

<p>⭐ Rating: ${item.rating}</p>

<p>💰 Budget: ₹${item.budget}</p>

<p>📅 Days: ${item.days}</p>

<p>📆 Best Month: ${item.month}</p>

<p>🌤 Best Season: ${item.season}</p>

</div>

`;

container.appendChild(card);

});

}

