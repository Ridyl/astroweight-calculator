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
planets.reverse();

// On page load function reverses order of array and then places each option within list dropdown. Also clears list and replaces on function call.
function planetList() {
    // clears dropdown menu to redraw for new planets
    while (list.firstChild) {
        list.firstChild.remove();
    }

    for(let i = 0; i < planets.length; i++) {
        let newOption = document.createElement("option")
        let name = planets[i][0];

        if (plutoHaters.checked == true && name === "Pluto") {
            continue;
        } else {
            newOption.textContent = name;
            list.appendChild(newOption);
        }
    }
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

// When Custom Planet button is clicked it displays the hidden popup.
// Then call submitCustomPlanet when hidden sumbit button is clicked.
function createCustomPlanet() {
    popupForm.style.display = "block";

    submitButton.onclick = submitCustomPlanet;
}

// Extrapolates form data and places user values into a new planet array, then pushes to start of master planet array to make it first option on the list.
function submitCustomPlanet() {
    let form = document.getElementById("popup");
    let formData = new FormData(form);
    let addPlanet = [];

    for (let [key, value] of formData) {
        addPlanet.push(value);
    }

    planets.unshift(addPlanet);
    popupForm.style.display = "none";

    planetList();
}

button.onclick = handleClickEvent;
customButton.onclick = createCustomPlanet;



