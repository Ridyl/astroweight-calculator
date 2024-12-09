var planets = [ 
['Pluto', 0.06], 
['Neptune', 1.148], 
['Uranus', 0.917], 
['Saturn', 1.139], 
['Jupiter', 2.640], 
['Mars', 0.3895], 
['Moon', 0.1655], 
['Earth', 1], 
['Venus', 0.9032], 
['Mercury', 0.377], 
['Sun', 27.9] 
];

let button = document.getElementById("calculate-button");
let customButton = document.getElementById("custom");
let list = document.getElementById("planets");
let plutoHaters = document.getElementById("pluto-denial");
let popupForm = document.getElementById("new-planet");
let submitButton = document.getElementById("submit-button");

// On page load function reverses order of array and then places each option within list dropdown. Also clears list and replaces on function call.function planetList() {
    while (list.firstChild) {
        list.firstChild.remove();
    }

    planets.reverse().forEach((element) => {
        let newOption = document.createElement("option");
        let name = element[0];
        
        newOption.textContent = name;

        list.appendChild(newOption);
    });
}

// When function is called a default gravity variation is placed and given planetName is filtered through plants list to find corresponding variation value.
function calculateWeight(weight, planetName) { 
    let variation = 1;

    planets.forEach((planet) => {
        if (planet[0] === planetName) {
            variation = planet[1];
        } 
    });
    return weight * variation;
}

// Handles ClickEvent for the calculate button. Takes required inputs and asigns them to variables to be passes to calculateWeight(), then returned and placed in output text.
function handleClickEvent(e) {
    let userInput = document.getElementById("user-weight");
    let output = document.getElementById("output");
    let userWeight = userInput.value;
    let planetName = list.value;
    let result = null;

    // If statement insures that there is a value input by the user in weight input. If not, user is prompted to enter one.
    if(userInput && userInput.value) {
        result = calculateWeight(userWeight, planetName);
        output.textContent = `If you were on ${planetName}, you would weigh ${result}lbs!`;
    } else {
        output.textContent = `Please enter a weight.`;
    }
} 

function createCustomPlanet() {
    popupForm.style.display = "block";

    submitButton.onclick = submitCustomPlanet;
}

function submitCustomPlanet() {
    let form = document.getElementById("popup");
    let formData = new FormData(form);
    let addPlanet = [];

    for (let [key, value] of formData) {
        addPlanet.push(value);
    }

    planets.push(addPlanet);
    planetList();
    popupForm.style.display = "none";
}

button.onclick = handleClickEvent;
customButton.onclick = createCustomPlanet;



// Bonus Challenges 
// 9. Create a remove pluto button to appease the pluto deniers.
// 10. Cutsom Planet

